const express = require("express");
const app = express();
const route_index = require("./routes/index");
//db
require("./DB/db");

//adding cors
var cors = require("cors");

//using cors
app.use(cors());

app.use(express.json());
app.use(route_index);
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
