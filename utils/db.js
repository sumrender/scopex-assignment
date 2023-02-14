const mongoose = require("mongoose");

// const uri = "mongodb://127.0.0.1:27017/scopex";
const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log("connected with database");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
