import express from 'express'
import 'dotenv/config'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'


const app=express()

app.use(cors({
    credentials:true
}))
app.use(compression())
app.use(bodyParser.json())
app.use(cookieParser())



const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});