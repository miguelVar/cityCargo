const express = require('express');
const router = express.Router();
const conductorCtrl = require('../controllers/conductor.controller');

//Lista conductor
router.get('/', conductorCtrl.getConductor);
router.get('/countcel/:id', conductorCtrl.getConductor);

//Crea conductor
router.post('/', conductorCtrl.createConductor);

//Edita conductor
router.put('/:idConductor', conductorCtrl.updateConductor);

//Elimina logico conductor
router.put('/deletelogicoconductor/:idConductor', conductorCtrl.deleteLogicoConductor);

//Lista Vehiculos Eliminados
router.get('/getConductoresEliminados/', conductorCtrl.getConductorEliminado);

//Restaura logico condutor
router.put('/restauralogicoconductor/:idConductor', conductorCtrl.restauraLogicoConductor);

//Elimina fisico conductor
router.delete('/:idConductor', conductorCtrl.eliminaFisicoConductor);

module.exports = router;