const mongoose = require('mongoose') ;

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required: true,
   },},
    { timestamps: true }
);
module.exports = mongoose.models.Customer || mongoose.model('Customer', customerSchema);


