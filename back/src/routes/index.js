const {Router} = require('express');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
let favs = require('../utils/favs');

const router = Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);
router.post('/rickandmorty/fav', (req, res) => {
    favs.push(req.body);
    res.status(200).json({"message": "Favorito agregado"});
});

router.get('/rickandmorty/fav', (req, res) => {
    res.status(200).json(favs);
});

router.delete('/rickandmorty/fav/:id', (req, res) => {
    const { id } = req.params;
    favs = favs.filter((fav) => fav.id != id);
    res.status(200).json({"message": "Favorito eliminado"});
});

module.exports = router;
