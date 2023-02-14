const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  doc_submitted: Boolean,
  is_verified: Boolean,
  is_activated: Boolean,
  username: String,
  password: String,
  full_name: String,
  email: String,
  country: String,
  user_type: String,
  doc_address_filename: String,
  doc_id_filename: String,
});

module.exports = mongoose.model("User", userSchema);
