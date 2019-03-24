const express = require('express');
const router = express.Router();
const vehiculoCtrl = require('../controllers/vehiculo.controller');

//Lista vehiculo
router.get('/', vehiculoCtrl.getVehiculo);

//Crea Vehiculo
router.post('/', vehiculoCtrl.createVehiculo);

//Edita Vehiculo
router.put('/:idVehiculo', vehiculoCtrl.updateVehiculo);

//Elimina Vehiculo logico
router.put('/deletelogicovehiculo/:idVehiculo', vehiculoCtrl.deleteVehiculoLogico);

//Lista Vehiculos Eliminados
router.get('/getVehiculosEliminados/', vehiculoCtrl.getVehiculoEliminado);

//Restaura logico vehiculo
router.put('/restauralogicovehiculo/:idVehiculo', vehiculoCtrl.restauraLogicoVehiculo);

//Elimina Vehiculo fisico
router.delete('/:idVehiculo', vehiculoCtrl.deleteVehiculoFisico);

module.exports = router;