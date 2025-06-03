import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { getChatHistory } from '../controllers/chatController.js';

const router = express.Router();

router.get('/history/:userId', verifyToken, getChatHistory);

export default router;
