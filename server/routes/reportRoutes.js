import express from 'express';
import { reportUser, getAllReports, markReportResolved } from '../controllers/reportController.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import { isAdmin } from '../middleware/adminMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, reportUser);
router.get('/', verifyToken, isAdmin, getAllReports);
router.put('/:id/resolve', verifyToken, isAdmin, markReportResolved);

export default router;
