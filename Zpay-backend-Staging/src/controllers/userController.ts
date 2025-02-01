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
        //1. Extract user data from the request body
        const {email,password}=req.body;
        //2. User verification
        const user =await prisma.user.findFirst({
            where:{email}
        });
        const username=user?.name;
        //3. Check if the user exists
        if(!user){
            return res.status(401).json({error:"user not found"});
        }
        //4. Check if the password is correct
        const isValidPassword=await bcrypt.compare(password,user?.password);
        if(!isValidPassword){
            return res.status(401).json({error:"invalid password"});
        }

        //5.Generate JWT Token
        const token=jwt.sign({id:user?.id},process.env.JWT_SECRET!,{expiresIn:'24h'})
        res.status(200).json({token,message:`login successful ${username}`,username});
    } catch(error){
        res.status(500).json({error:"please check your credentials"})
    }
}