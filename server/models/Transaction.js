// server/models/Transaction.js

import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  professionalId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  platformFee: { type: Number, required: true }, // e.g., 10% commission
  paymentStatus: { type: String, enum: ['success', 'failed'], default: 'success' },
  paymentId: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Transaction', transactionSchema);
