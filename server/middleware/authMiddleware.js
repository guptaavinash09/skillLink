// import jwt from 'jsonwebtoken';

// export const verifyToken = (req, res, next) => {
//     const token = req.headers.authorisation?.split(" ")[1];
//     if(!token) return res.status(403).json({message: "Acess denied"});

//     try{
//         const decode = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     }
//     catch(err){
//         res.status(401).json({message: "Invalid token"});
//     }
// };

// export const requireRole = (role) => (req, res, next) => {
//     if(req.use.role != role){
//         return res.status(403).json({message: "forfidden"});
//     }
//     next();
// };



import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const requireRole = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};

