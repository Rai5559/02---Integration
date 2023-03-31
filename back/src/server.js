const express = require('express');
const router = require('./routes/index');
const morgan = require('morgan');
const cors = require('cors');
const PORT = 3001;

const server = express();
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use('/', router);

server.listen(PORT, () => {
   
});


module.exports=express;
// const http = require("http");
// const getCharById=require("./controllers/getCharById")
// const getCharDetail=require("./controllers/getCharDetail")

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;

//     if (url.includes("onsearch")) {
//       const characterId = req.url.split("/").pop();
//       getCharById(res, characterId);
//     } 

//     if(url.includes("detail")){
//       const characterId = req.url.split("/").pop();
//       getCharDetail(res, characterId);
//     }
//   })

//   .listen(3001, () => {
//     console.log('Servidor escuchando en puerto 3001');
//   });
