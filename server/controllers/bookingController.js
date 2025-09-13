import Booking from '../models/Booking.js';
import User from '../models/User.js';

export const bookAppointment = async (req, res) => {
  try {
    const { professionalId, date, timeSlot, notes } = req.body;

    // Check for existing booking conflict
    const existing = await Booking.findOne({ professionalId, date, timeSlot });
    if (existing) return res.status(409).json({ message: "Slot already booked" });

    const booking = new Booking({
      customerId: req.user.id,
      professionalId,
      date,
      timeSlot,
      notes
    });
    await booking.save();

    res.status(201).json({ message: "Booking created", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCustomerBookings = async (req, res) => {
  const bookings = await Booking.find({ customerId: req.user.id }).populate('professionalId', 'name professionalDetails.profession');
  res.json({ bookings });
};

export const getProfessionalBookings = async (req, res) => {
  const bookings = await Booking.find({ professionalId: req.user.id }).populate('customerId', 'name');
  res.json({ bookings });
};
