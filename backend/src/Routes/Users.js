import express from 'express';
import {
  userLogin,
  userRegister
} from '../Controller/UserController.js'

const route = express.Router();
route.get('/register', userRegister);
route.get('/login', userLogin);

export default route