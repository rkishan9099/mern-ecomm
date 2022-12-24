import express from 'express'
import dotenv  from 'dotenv';
import DBconnect from './config/dbConnect.js'
dotenv.config();
const app = express();
DBconnect();

export default app;