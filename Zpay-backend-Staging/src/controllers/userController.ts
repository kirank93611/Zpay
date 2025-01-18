import { Request, Response } from 'express';
import prisma from '../../DB/';  // Prisma client to interact with DB

// Register User
export const registerUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,  // In real-world, hash password before saving
            },
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};