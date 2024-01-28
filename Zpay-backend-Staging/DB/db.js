const mongo = require("mongoose");

const MONGODB_URI = process.env.DB;

//connect to mongo DB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Handle connection events
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Connection error"));
db.once("open", () => {
  console.log("connected to DB");
});
