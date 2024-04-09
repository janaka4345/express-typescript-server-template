import express from 'express'
import 'dotenv/config'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'

import { userRouter } from './routes/userRoutes'


const app=express()

app.use(cors({
    credentials:true
}))
app.use(compression())
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api/users/',userRouter)

app.get('/',(req,res)=>{
  res.json({message:'welcome'})
})






const port = process.env.PORT || 3000; 

const uri=process.env.MONGODB_URI||""

mongoose.connect(uri)
.then(()=>{
  app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
  });
})
.catch((error:Error)=>console.log(error))
// .finally(()=>{console.log('connection closed');
// }
// )

