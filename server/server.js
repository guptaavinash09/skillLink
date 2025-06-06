// 📦 Imports
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';

import professionalRoutes from './routes/professionalRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { verifyToken } from './middleware/authMiddleware.js';
import Message from './models/Message.js';
import paymentRoutes from './routes/paymentRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import reportRoutes from './routes/reportRoutes.js';

// 🌍 Environment setup
dotenv.config();

// 🚀 Express app setup
const app = express();

// ✅ CORS for frontend connection
app.use(cors({
  origin: 'http://localhost:5173', // Vite frontend URL
  credentials: true
}));

app.use(express.json());

// 🔗 REST API routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/professionals', professionalRoutes);
app.use('/api/payments', paymentRoutes); // ✅ FIXED: was './api/payments'
app.use('/api/reviews', reviewRoutes);   // ✅ FIXED: was './api/reviews'
app.use('/api/admin', adminRoutes);
app.use('/api/reports', reportRoutes);

// 🛡️ Protected test route
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({ message: `Hello ${req.user.role}` });
});

// 🔌 Create HTTP server
const server = http.createServer(app);

// 💬 WebSocket setup
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// 🔐 WebSocket token verification
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) return next(new Error("No token"));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded;
    next();
  } catch (err) {
    next(new Error("Invalid token"));
  }
});

// 🎧 WebSocket events
io.on('connection', (socket) => {
  console.log(`🟢 User connected: ${socket.user.id}`);

  socket.on('join_room', (userId) => {
    socket.join(userId);
  });

  socket.on('send_message', async ({ to, content }) => {
    const message = new Message({
      senderId: socket.user.id,
      receiverId: to,
      content
    });

    await message.save();
    io.to(to).emit('receive_message', message);
  });

  socket.on('disconnect', () => {
    console.log(`🔴 User disconnected: ${socket.user.id}`);
  });
});

// 🧠 Connect MongoDB and start server
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    server.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error("❌ MongoDB connection error:", err));
