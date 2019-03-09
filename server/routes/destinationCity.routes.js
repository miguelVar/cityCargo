const express = require('express');
const router = express.Router();
const destinationCityCtrl = require('../controllers/destinationCity.controller');


router.get('/',destinationCityCtrl.getDestinationCity);
router.post('/',destinationCityCtrl.createDestinationCity);
router.put('/:id',destinationCityCtrl.updateDestinationCity);


module.exports = router;