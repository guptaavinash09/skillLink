import express from 'express';
import { createReview, getProfessionalReviews } from '../controllers/reviewController.js';
import { verifyToken, requireRole } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, requireRole('customer'), createReview);
router.get('/:professionalId', getProfessionalReviews);

export default router;
