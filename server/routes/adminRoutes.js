// import express from 'express';
// import { getAdminDashboard, blockUser, unblockUser, getAllUsers } from '../controllers/adminController.js';
// import { verifyToken} from '../middleware/authMiddleware.js';
// import { isAdmin } from '../middleware/adminMiddleware';

// const router = express.Router();

// router.get('/dashboard', verifyToken, isAdmin. getAdminDashboard);
// router.get('/users', verifyToken, isAdmin, getAllUsers);
// router.put('users/:userId/block', verifyToken, isAdmin, unblockUser);

// export default router;


import express from 'express';
import { getAdminDashboard, blockUser, unblockUser, getAllUsers } from '../controllers/adminController.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import { isAdmin } from '../middleware/adminMiddleware.js';

const router = express.Router();

router.get('/dashboard', verifyToken, isAdmin, getAdminDashboard);
router.get('/users', verifyToken, isAdmin, getAllUsers);
router.put('/users/:userId/block', verifyToken, isAdmin, blockUser);
router.put('/users/:userId/unblock', verifyToken, isAdmin, unblockUser);

export default router;
