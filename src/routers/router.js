const router = require('express').Router();
const {mostraProductos, mostarPorId, AñadirProduct, actualizarProcut} = require('../controllers/controller');

router.get('/Product',mostraProductos);
router.get('/Product/:id', mostarPorId);
router.post('/Product',AñadirProduct);
router.put('/Product/:id',actualizarProcut)

module.exports = router;