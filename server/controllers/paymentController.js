import razorpay from '../config/razorpay.js';
import crypto from 'crypto';

export const createOrder = async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // convert to paisa
    currency: 'INR',
    receipt: `receipt_order_${Date.now()}`
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json({ orderId: order.id, amount: order.amount, currency: order.currency });
  } catch (error) {
    res.status(500).json({ error: 'Error creating Razorpay order' });
  }
};

export const verifyPayment = (req, res) => {
  const { order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const generatedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET)
    .update(order_id + "|" + razorpay_payment_id)
    .digest('hex');

  if (generatedSignature === razorpay_signature) {
    // Payment verified
    res.status(200).json({ message: "Payment verified" });
  } else {
    res.status(400).json({ message: "Invalid signature" });
  }
};
