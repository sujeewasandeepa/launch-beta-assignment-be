const { mongoose, Schema } = require('mongoose');

const counterSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 1 }
  });
  
module.exports = mongoose.model('Counter', counterSchema);
  