// import mongoose from "mongoose";

// const userSchema  = new mongoose.Schema({
//     name: {type : String, required : true},
//     email: {type : String, required : true, unique : true},
//     phone: {type : String},
//     password: {type : String, required: true},
//     role: {type : String, enum: ['customer', 'professional', 'admin'], default: 'customer'},
// }, {timestamps : true });

// export default mongoose.model('user', userSchema);




import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },
    role: { type: String, enum: ['customer', 'professional', 'admin'], default: 'customer' },
  
    // Add this section:
    professionalDetails: {
      profession: String,
      experience: String,
      skills: [String],
      location: String,
      pricing: String,
      availability: String,
      isVerified: { type: Boolean, default: false },
    }
  
  }, { timestamps: true });
  

export default mongoose.model('User', userSchema);
