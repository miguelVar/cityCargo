const express = require('express');
const router = express.Router();
const trasnsportElementCtrl = require('../controllers/transportElements.controller');



router.post('/',trasnsportElementCtrl.createTransportElement);



module.exports = router;