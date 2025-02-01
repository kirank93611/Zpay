// src/controllers/userController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const TransactionController =
    async (req:Request,res:Response)=>{
        try{
            const {name,email,password}=req.body;

            //hashing password
            const hashedPassword=await bcrypt.hash(password,10);

            //create user
            const user=await prisma.user.create({
                data:{
                    name,email,password:hashedPassword
                },
            });

            //generate jwt
            const token=jwt.sign(
                {id:user.id},
                process.env.JWT_SECRET!,
                {expiresIn:'24h'}
            );
            res.status(201).json({
                user,token
            })
        } catch(error){
            res.status(500).json({error:"Registration Failed"})
        }
    }
