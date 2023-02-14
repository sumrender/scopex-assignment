const express = require("express");
const path = require("path");
const connectDB = require("./utils/db");
const userRoutes = require("./routes/userRoutes");
const addFakeDataToDB = require("./utils/genFakeData");

const app = express();

app.use("/api", userRoutes);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

const startServer = async () => {
  await connectDB();
  // await addFakeDataToDB(5);
  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
};
startServer();
