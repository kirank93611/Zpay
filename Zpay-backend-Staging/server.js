const express = require("express");
const app = express();

//web3
const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:8545");
//port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on the port: ${PORT}`);
});
