const mongoose = require("mongoose");

//define user schema
const userSchema = new mongoose.Schema({
  userId: { type: String, unique: true, required: true },
  walletAddress: { type: String, unique: true, required: true },
  balance: { type: Number, default: 0 },
  HashedPassword: { type: String, required: true },
  //   userType: {
  //     type: String,
  //     enum: ["regular", "merchant"],
  //     default: regular,
  //     required: false,
  //   },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
