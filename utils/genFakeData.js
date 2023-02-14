const dummy = require("mongoose-dummy");
const User = require("../models/userModel");
const Transfer = require("../models/transferModel");

function genFakeData(model, num_of_items) {
  const ignoredFields = ["_id", "created_at", "__v", /detail.*_info/];

  let data = [];
  for (let i = 0; i < num_of_items; i++) {
    let randomObject = dummy(model, {
      ignore: ignoredFields,
      returnDate: true,
    });
    data.push(randomObject);
  }
  return data;
}

async function addFakeDataToDB(num_of_items) {
  let userData = genFakeData(User, num_of_items);
  let transferData = genFakeData(Transfer, num_of_items);
  try {
    await User.insertMany(userData);
    await Transfer.insertMany(transferData);
    console.log("fake data added successfully");
  } catch (error) {
    console.error(error);
  }
}

module.exports = addFakeDataToDB;
