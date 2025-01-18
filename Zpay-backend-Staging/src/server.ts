import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes';

dotenv.config() //Load environment variable form .env file

const app=express();
app.use(cors()); //  // Enable Cross-Origin Resource Sharing for front-end access
app.use(express.json()) //Parse incoming requests

//Setup routes
app.use('/api/users',userRoutes);

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server is running on port:${port}`);
})