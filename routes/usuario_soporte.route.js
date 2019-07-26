const express = require('express');
const auth = require('../middlewares/authentication');
const router = express.Router();
const rutasController = require('../controllers/usuario.controller');

router.post('/login', usuarioController.loginSoporte);
router.post('/cambiar-contrasena', [auth.verificarTokenUsuario, auth.isAdmin], usuarioController.cambiarContraseñaSoporte);
module.exports = router;