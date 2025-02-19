import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser' 
import postRouter from './routes/post.routes'   


//init
const app = express()

// middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser())
app.use(express.json({
    limit: '50kb'
}))

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//routes

app.use('api/v1',postRouter)


//error middleware



export default app;