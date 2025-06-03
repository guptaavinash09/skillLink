// import mongoose from 'mongoose';
// const messageSchema = new mongoose.schema({
//     senderId: {type: mongoose.Schema.type.ObjectId, ref: 'User', req: true},
//     receiverID: {type: mongoose.Schema.type.ObhectId, ref: 'User', req: true},
//     content: {type: String, required: true},
//     type: {type: String, enum: ['text', 'images'], default: 'text'},
//     Timestamp: {type: Date, default: Date.now};
// });

// export default mongoose.model(Message, messageSchema);




import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  type: { type: String, enum: ['text', 'image'], default: 'text' },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Message', messageSchema);
