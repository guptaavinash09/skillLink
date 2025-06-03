import express from 'express';
import { verifyToken, requireRole } from '../middleware/authMiddleware.js';
import {
  updateProfessionalProfile,
  getProfessionals
} from '../controllers/professionalController.js';

const router = express.Router();

// Only professionals can create/update their profile
router.put('/profile', verifyToken, requireRole('professional'), updateProfessionalProfile);

// Public route to fetch professionals
router.get('/list', getProfessionals);

export default router;
