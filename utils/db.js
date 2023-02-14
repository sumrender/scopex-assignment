const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/scopex";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log("connected with database");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDB;
