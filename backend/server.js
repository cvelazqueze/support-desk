import express from 'express';
import * as dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js';
import ticketRouter from './routes/ticketRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js'
import colors from 'colors'
import connectDB from './config/db.js'

dotenv.config()

const {
    PORT
} = process.env

connectDB()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Support Desk'
    })
})

app.use('/api/users', userRouter)
app.use('/api/tickets', ticketRouter)
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))