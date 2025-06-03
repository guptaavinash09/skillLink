// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// import authRoutes from './routes/authRoutes.js'
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 3000;
// mongoose.connect(process.env.MONGO_URI)

// .then(() => {
//     console.log("mongoose connected");
//     app.listen(PORT, () => console.log("server is running on ${PORT}"));
// })

// .catch(err => console.log(err));



import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// import { verifyToken } from './middleware/authMiddleware.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Import routes
import authRoutes from './routes/authRoutes.js';
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT} http://localhost:3000/`));
  })
  .catch(err => console.log(err));

// app.get("/api/protected", verifyToken, (req, res) => {
//   res.json({ message: `Hello ${req.user.role}` });
// });