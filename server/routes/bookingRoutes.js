// import express from 'express';
// import {varifyToken, requireRole} from '../middleware/authMiddleware.js';

// import{
//     bookAppointment,
//     getCustomerBookings,
//     getProfessionalBookings
// } from '../controllers/bookingController.js';


// const router = express.Router();

// router.post('./book', verifyTiken, requireRole('customer'), bookAppointment);
// router.get('/', getAllProfessionals);
// router.get('/me', verifyToken, requireRole('professional'), getMyProfile);

// export default router;


import express from 'express';
import { verifyToken, requireRole } from '../middleware/authMiddleware.js';
import {
  bookAppointment,
  getCustomerBookings,
  getProfessionalBookings
} from '../controllers/bookingController.js';

const router = express.Router();

// Customer books appointment
router.post('/book', verifyToken, requireRole('customer'), bookAppointment);

// Customer sees bookings
router.get('/customer', verifyToken, requireRole('customer'), getCustomerBookings);

// Professional sees calendar bookings
router.get('/professional', verifyToken, requireRole('professional'), getProfessionalBookings);

export default router;
