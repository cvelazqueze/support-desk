import express from 'express';
import * as dotenv from 'dotenv'
import router from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

const {
    PORT
} = process.env

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Support Desk'
    })
})

app.use('/api/users', router)
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))