import express from 'express';
import {UserController} from "../controllers/userController";


const router=express.Router();

router.post('/signin',UserController);

export default router;