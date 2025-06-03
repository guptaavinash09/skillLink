import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  professionalId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true },     // e.g., '2025-06-15'
  timeSlot: { type: String, required: true }, // e.g., '10:00 AM - 11:00 AM'
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  notes: { type: String }
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
