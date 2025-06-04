// import Transaction from '../models/Transaction.js';
// import User from '../models/User.js';
// import Review from '../models/Review.js';

// export const getAdminDashboard = async(req, res) => {
//     try{
//         const transactions = await Transaction.find();

//         let totalEarnings = 0;
//         let totalTransactions = transactions.length;

//         transactions.forEach(tx => {
//             totalEarnings += tx.platformFee;
//         });

//         const totalUsers = await.countDocuments();
//         const totalProfessionals = await User.countDocuments({role: 'customer'});

//         res.json({
//             totalEarnings,
//             totalTransactions,
//             totalUsers,
//             totalCustomers,
//             totalProefssionals
//         });
//     }catch(error){
//         res.status(500).json({message: "Dashboard error", error: error.message});
//     }
// };


import Transaction from '../models/Transaction.js';
import User from '../models/User.js';
import Review from '../models/Review.js';

export const getAllUsers = async (req, res) => {
    const users = await User.find({}, '-password');
    res.json(users);
  };
  
  export const blockUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.userId, { isBlocked: true });
    res.json({ message: "User blocked successfully" });
  };
  
  export const unblockUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.userId, { isBlocked: false });
    res.json({ message: "User unblocked successfully" });
  };
  


export const getAdminDashboard = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    let totalEarnings = 0;
    let totalTransactions = transactions.length;

    transactions.forEach(tx => {
      totalEarnings += tx.platformFee; // Assuming you log platformFee in each tx
    });

    const totalUsers = await User.countDocuments();
    const totalProfessionals = await User.countDocuments({ role: 'professional' });
    const totalCustomers = await User.countDocuments({ role: 'customer' });

    res.json({
      totalEarnings,
      totalTransactions,
      totalUsers,
      totalCustomers,
      totalProfessionals
    });
  } catch (error) {
    res.status(500).json({ message: "Dashboard error", error: error.message });
  }
};
