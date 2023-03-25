const axios = require("axios");

const URL="https://be-a-rym.up.railway.app/api";
const key="5c7b65ba57e1.21d29bcea914b4f4d504";


const getCharDetail=(res, ID)=>{
  axios(`${URL}/character/${ID}?key=${key}`)
    .then((response) => {
      const {  image, name, gender, status, origin, species } = response.data;
      const obj = { image, name, gender, status, origin, species };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(obj));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
}

module.exports=getCharDetail;