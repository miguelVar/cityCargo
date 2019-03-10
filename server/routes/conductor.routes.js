const express = require('express');
const router = express.Router();
const conductorCtrl = require('../controller/conductor.controller');

//Lista conductor
router.get('/', conductorCtrl.getConductor);

//Crea conductor
router.post('/', conductorCtrl.createConductor);

//Edita conductor
router.put('/:idConductor', conductorCtrl.updateConductor);

//Elimina logico conductor
router.put('/deletelogicoconductor/:idConductor', conductorCtrl.deleteLogicoConductor);

//Restaura logico condutor
router.put('/restauralogicoconductor/:idConductor', conductorCtrl.restauraLogicoConductor);

//Elimina fisico conductor
router.delete('/:idConductor', conductorCtrl.eliminaFisicoConductor);

module.exports = router;