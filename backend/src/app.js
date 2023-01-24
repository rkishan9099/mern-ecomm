import express from 'express'
import dotenv  from 'dotenv';
dotenv.config();
//import db_connect from'./config/dbConnect.js'
import ErrorHandler from './Middleware/errorHandler.js'
import UserRoutes from './Routes/Users.js'
//console.log(process.env.PORT)
const app = express();
app.use(express.json());
//db_connect();
app.get("/",(req,res)=>{
  res.send("hello world by rkishan😎😎😎😎");
})
app.use('/',UserRoutes);

app.use((req,res,next)=>{
  const err = new Error("Not Found");
  err.status=404;
  next(err);
})
app.use(ErrorHandler);
export default app;