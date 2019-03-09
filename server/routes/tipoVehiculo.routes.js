const express = require('express');
const router = express.Router();
const tipoVehiculoCtrl = require('../controller/tipoVehiculo.controller');

//Lista tipo vehiculo
router.get('/', tipoVehiculoCtrl.getTipoVehiculo);

//Crea tipo vehiculo
router.post('/', tipoVehiculoCtrl.createTipoVehiculo);

//Actualiza tipo vehiculo
router.put('/:idTipoVehiculo', tipoVehiculoCtrl.updateTipoVehiculo);

//Elimina tipo vehiculo
router.delete('/:idTipoVehiculo', tipoVehiculoCtrl.deleteTipoVehiculo);

module.exports = router;