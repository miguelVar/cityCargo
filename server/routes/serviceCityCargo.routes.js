const express = require('express');
const router = express.Router();
const serviceCityCargoCtrl = require('../controllers/serviceCityCargo.controller');



router.post('/',serviceCityCargoCtrl.createServiceCityCargo);
router.get('/:id',serviceCityCargoCtrl.getServiceCityCargo);
router.put('/:id',serviceCityCargoCtrl.updateServiceCityCargo);
router.delete('/:id',serviceCityCargoCtrl.deleteServiceCityCargo);
router.put('/deletelogic/:id',serviceCityCargoCtrl.deletelogicServiceCityCargo);



module.exports=router;