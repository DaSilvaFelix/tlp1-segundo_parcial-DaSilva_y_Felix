const router = require('express').Router();
const {mostraProductos} = require('../controllers/controller');

router.get('/Product',mostraProductos);

module.exports = router;