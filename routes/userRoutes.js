const express = require("express");
const {
  getAllUsers,
  getUser,
  getAllTransactions,
} = require("../controllers/userController");

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.get("/transfers/:id", getAllTransactions);

module.exports = router;
