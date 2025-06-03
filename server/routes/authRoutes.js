// import express from "express";
// import {register, login} from '../controllers/authController';

// const router = express.Router();

// router.post("register, reginster");
// router.post('login', login);

// export default router;



import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;
