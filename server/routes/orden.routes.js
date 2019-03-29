const express = require('express');
const router = express.Router();
const ordenCtrl = require('../controllers/orden.controller');

//Lista ordenes
router.get('/', ordenCtrl.getOrden);

router.get('/countorden/:id', ordenCtrl.getCountOrden);
// Crear orden
router.post('/', ordenCtrl.createOrden);
// Actualiza orden
router.put('/:idOrden', ordenCtrl.updateOrden);
//Elimina orden
router.delete('/:idOrden', ordenCtrl.deleteOrden);


module.exports = router;