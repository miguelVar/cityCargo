const express = require('express');
const router = express.Router();
const serviceCityCargoCtrl = require('../controllers/serviceCityCargo.controller');



router.post('/',serviceCityCargoCtrl.createServiceCityCargo);



module.exports=router;