const http = require("http");
const getCharById=require("./controllers/getCharById")
const getCharDetail=require("./controllers/getCharDetail")

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    if (url.includes("onsearch")) {
      const characterId = req.url.split("/").pop();
      getCharById(res, characterId);
    } 

    if(url.includes("detail")){
      const characterId = req.url.split("/").pop();
      getCharDetail(res, characterId);
    }
  })

  .listen(3001, () => {
    console.log('Servidor escuchando en puerto 3001');
  });
