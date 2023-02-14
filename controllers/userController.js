const User = require("../models/userModel");
const Transfer = require("../models/transferModel");

async function getAllUsers(req, res) {
  const data = await User.find();
  res.status(200).json(data);
}

async function getUser(req, res) {
  try {
    const { id } = req.params;
    if (!id) throw new Error("no ID received");
    const user = await User.findById(id);

    if (!user) res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(400).json(error.message);
  }
}

async function getAllTransactions(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) res.status(404).json({ message: "User not found" });

    const query = { user_id: id };
    const transfers = await Transfer.find(query).sort("-date");

    let sentData = new Array(12).fill(0);
    let recvData = new Array(12).fill(0);
    transfers.forEach((transfer) => {
      let month = JSON.stringify(transfer.date_of_transfer);
      month = month.substr(6, 2);
      idx = parseInt(month) - 1;

      sentData[idx] += transfer.sent_amount;
      recvData[idx] += transfer.recieved_amount;
    });

    res.status(200).json({ sentData, recvData });
  } catch (error) {
    console.error(error.message);
    res.status(400).json(error.message);
  }
}

module.exports = {
  getAllUsers,
  getUser,
  getAllTransactions,
};
