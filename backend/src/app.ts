import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser' 
import postRouter from './routes/post.routes'   
import { errorMiddleware } from './middlewares/error.middleware'


//init
const app = express()

// middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true  // help us to get cookkies and headers from the connected frontend
}))
app.use(cookieParser())  // to parse the cookies from the request and send it to the response
app.use(express.json({   // to parse the request body it should be in json format
    limit: '50kb'   // limit the size of the request body
}))

app.use(express.static('public'))   ///static files default path  
app.use(express.urlencoded({ extended: true }))  // to parse the request body it should be in urlencoded format


//routes

app.use('/api/v1', postRouter)

//error middleware

app.use(errorMiddleware)  // error middleware should be at the end of the middleware stack

export default app;