import express from 'express'
import dotenv  from 'dotenv';
dotenv.config();
import db_connect from'./config/dbConnect.js'
import ErrorHandler from './Middleware/errorHandler.js'
//console.log(process.env.PORT)
const app = express();
app.use(express.json());
db_connect();
app.get('/',(req,res,next)=>{
  res.send("Hello World from Rkishan😊😁")
  next('55555');
})
app.use((req,res,next)=>{
  const err = new Error("Not Found");
  err.status=404;
  next(err);
})
app.use(ErrorHandler);
export default app;