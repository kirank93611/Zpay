// src/server.ts
import express from 'express';
import cors from 'cors';
import { PrismaClient } from "@prisma/client"
import userRoutes from './routes/userRoutes';
import walletRoutes from './routes/walletRoutes';
import transactionRoutes from './routes/transactionRoutes';
import { Request, Response } from 'express';
import 'dotenv/config';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Route Definitions
app.use('/api/users', userRoutes);
app.use('/api/wallets', walletRoutes);
app.use('/api/transactions', transactionRoutes);

// Error Handling
app.use((err: Error, req: express.Request, res: express.Response,next:express.NextFunction) => {
  console.error(err.stack);
  console.log("im up");
  res.status(500).json('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app, prisma };