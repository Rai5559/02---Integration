const axios = require("axios");

const URL="https://be-a-rym.up.railway.app/api";
const key="5c7b65ba57e1.21d29bcea914b4f4d504";


async function getCharDetail(req, res) {
  const { id } = req.params;
  try {
    const response = await axios.get(`${URL}/character/${id}?key=${key}`);
    const {  image, name, gender, status, origin, species } = response.data;
    const obj = { image, name, gender, status, origin, species };
    res.status(200).json(obj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports=getCharDetail;

