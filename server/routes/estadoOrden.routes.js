const express = require('express');
const router = express.Router();
const estadoOrdenCtrl = require('../controllers/estadoOrden.controller');

//Lista estado orden
router.get('/', estadoOrdenCtrl.getEstadoOrden);

module.exports = router;