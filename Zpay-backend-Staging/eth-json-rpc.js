require("dotenv");

const axios = requrie("axios");

const payload = {
  jsonrpc: "2.0",
  id: 0,
  method: "eth_getBalance",
  params: ["0x8303539291922EF29B518B5B93e8Ab07F22F2D1d", "latest"],
};

(async()=>{
    const reponse=await axios.post(`https://`)
})