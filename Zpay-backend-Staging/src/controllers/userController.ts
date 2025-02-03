// src/controllers/userController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const prisma = new PrismaClient();

export const signup=async(req:Request,res:Response)=>{
    try{
        //1. Extract user data from the request body
        const {name,email,password}=req.body;

        const existingUser=await prisma.user.findFirst({
            where:{email: email as string}
        });
        //2. Check if the email is already in use
        if(existingUser){
            return res.status(400).json({error:"email already in use"});
        }

        //3.Hashing the password
        const hashedPassword=await bcrypt.hash(password,10);

        //4. Create the user in the database
        const user=await prisma.user.create({
            data:{
                name,
                email,
                password:hashedPassword
            }
        });

        //5.Generate JWT Token
        const token=jwt.sign({name:user.name,email:user.email},process.env.JWT_SECRET!);

        const response={
            user,
            token
        }
        res.status(201).json(response);
    } catch(error){
        res.status(500).json({error:"please check retry again"})
    }
};

//Login controller
export const login=async(req:Request,res:Response)=>{
    try{
        const {email,password}=req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                error: "Email and password are required"
            });
        }

        // Find user
        const user = await prisma.user.findFirst({
            where: { email }
        });
        
        if (!user) {
            return res.status(401).json({
                error: "No account found with this email"
            });
        }

        // Check password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({
                error: "Invalid password"
            });
        }

        // Generate JWT Token
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET!,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            token,
            message: `Welcome back, ${user.name}!`,
            username: user.name
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            error: "An unexpected error occurred. Please try again later."
        });
    }
}