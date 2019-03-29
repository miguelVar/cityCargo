const express = require('express');
const router = express.Router();
const loginCtrl = require('../controllers/login.controller');

router.get('/',loginCtrl.obtenerUsuarios);
router.get('/logout',loginCtrl.logout);
router.get('/soygerente/:id', loginCtrl.validarGerente);
router.post('/login',loginCtrl.authentication);
router.post('/register',loginCtrl.register);
router.get('/logout',loginCtrl.logout);
router.get('/soygerente/:id', loginCtrl.validarGerente);
router.get('/idusuario', loginCtrl.getIdUsuarioDuplicado);

module.exports = router;