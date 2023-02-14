const mongoose = require("mongoose");

const transferSchema = new mongoose.Schema({
  is_deleted: Boolean,
  money_received: Boolean,
  is_completed: Boolean,
  date_of_transfer: Date,
  user_id: mongoose.Types.ObjectId,
  recepient_id: mongoose.Types.ObjectId,
  sent_amount: Number,
  recieved_amount: Number,
  src_currency: String,
  dest_currency: String,
  rate: Number,
  fee: Number,
  comments: String,
  deposit_code: String,
  user_deposit_confirmed: Boolean,
  transfer_types: String,
  recepient_name: String,
  receipient_nick_name: String,
});

module.exports = mongoose.model("Transfer", transferSchema);
