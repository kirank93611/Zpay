const express = require("express");
const app = express();

//db
require("./DB/db");

//body parser to avoid invalid body type in req body
const bodyparser = require("body-parser");

//web3
const { Web3 } = require("web3");
const bodyParser = require("body-parser");
const web3 = new Web3("http://127.0.0.1:8545");

//set up middleware to parse incoming JSON requests
app.use(bodyparser.json());

//port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on the port: ${PORT}`);
});
