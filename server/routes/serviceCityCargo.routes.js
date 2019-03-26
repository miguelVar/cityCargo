const express = require('express');
const router = express.Router();
const serviceCityCargoCtrl = require('../controllers/serviceCityCargo.controller');



router.post('/',serviceCityCargoCtrl.createServiceCityCargo);
router.get('/vehiculos',serviceCityCargoCtrl.getVehiculosCityCargo);
router.get('/link',serviceCityCargoCtrl.getServiceCityCargoLink);
router.get('/orden',serviceCityCargoCtrl.getOrdenesCityCargo);
router.get('/:id',serviceCityCargoCtrl.getServiceCityCargo);
router.put('/finalizar/:id',serviceCityCargoCtrl.finalizarServicio);
router.put('/actorden',serviceCityCargoCtrl.actualizarEstadoOrden);
router.put('/:id',serviceCityCargoCtrl.updateServiceCityCargo);
router.delete('/:id',serviceCityCargoCtrl.deleteServiceCityCargo);
router.put('/deletelogic/:id',serviceCityCargoCtrl.deletelogicServiceCityCargo);



module.exports=router;