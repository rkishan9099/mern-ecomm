import express from 'express'
import dotenv  from 'dotenv';
import DBconnect from './config/dbConnect.js'
dotenv.config();
const app = express();
DBconnect();
app.get('/',(req,res,next)=>{
  res.send("Hello World from Rkishan😊😁")
})
export default app;