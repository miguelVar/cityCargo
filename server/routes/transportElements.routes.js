const express = require('express');
const router = express.Router();
const trasnsportElementCtrl = require('../controllers/transportElements.controller');



router.post('/',trasnsportElementCtrl.createTransportElement);
router.get('/',trasnsportElementCtrl.getTransportElementLink);
router.get('/list',trasnsportElementCtrl.getTransportElementList);
router.get('/:id',trasnsportElementCtrl.getTransportElement);
router.put('/:id',trasnsportElementCtrl.updateTransportElement);
router.delete('/:id',trasnsportElementCtrl.deleteTransportElement);



module.exports = router;