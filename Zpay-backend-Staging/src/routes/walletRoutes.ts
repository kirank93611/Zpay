import express from 'express';
import {login,signup} from "../controllers/userController";


const router=express.Router();

router.post('/signin',login);

export default router;