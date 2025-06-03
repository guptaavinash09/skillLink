// import user from '../models/User.js';
// import bcrypt from 'bcrypt.js';
// import json from 'jsonwebtoken';
// import User from '../models/User.js';

// export const register = async(req, res) =>{
//     try{
//         const{name, email, password, role} = req.body;
//         const exitingUser = await User.findOne({emial});
//         if(exitingUser) return res.status(400).json({message: "user already exist"});

//         const hashedPassword = await bacrypt.hash(password, 10);
//         const newUser = new User({name, email, passweord : hashedPassword, role,})
//         await newUser.save();

//         res.status(201).json({message : "registered successfully"});
//     }

//     catch(err){
//         res.status(500).json({error: err.message});
//     }
// };

// export const login = async(req, res) =>{
//     try{
//         const {email, password } = req.body;
//         const user = await User.findOne({email});
//         if(!User) return res.status(404).json({message : "User not found"});
        

//         const isMatch = await User.findOne({emial});
//         if(isMatch) return res.status(401).json({message: "invalid credentials"});

//         const token = jwt.sign({id : user.id, role: user.role}, process.env.JWT>ServerClosedEvent, {expriresIn: "7d"});
//         res.status(500).json({token, user: {id: user._id, name: user.name, role: user.role}});
//     }

//     catch (err){
//         res.status(500).json({error : err.message});
//     }
// };


import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(200).json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
