import express from 'express';
const userRouter = express.Router();
import {registerUser, loginUser, getMe} from '../controllers/userController.js'
import protect from '../middleware/authMiddleware.js'

userRouter.post('/', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/me', protect, getMe)


export default userRouter
