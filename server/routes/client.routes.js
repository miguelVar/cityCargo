const express = require('express');
const router = express.Router();
const clientCtrl = require('../controllers/client.controller');

router.post('/',clientCtrl.createClient);
router.get('/',clientCtrl.getClient);
router.get('/deletedClient',clientCtrl.getClientDeletedLogic);
router.get('/counttel/:cel',clientCtrl.getCountTel);
router.put('/:id',clientCtrl.updateClient);
router.delete('/:id',clientCtrl.deleteClient);
router.put('/deletelogic/:id',clientCtrl.deleteLogicClient);


module.exports=router;