const mongoose = require("mongoose");
require("dotenv").config();
// const MONGODB_URI = process.env.DB;

//connect to mongo DB
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connect(process.env.DB);

//Handle connection events
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Connection error"));
db.once("open", () => {
  console.log("connected to DB");
});
