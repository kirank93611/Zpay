const mongoose = require("mongoose");

//transaction schema
const transactionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  transactionId: { type: String, unique: true, required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = { Transaction };
