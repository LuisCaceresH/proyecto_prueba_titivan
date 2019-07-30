const express = require('express');
const auth = require('../middlewares/authentication');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

router.post('/login', usuarioController.loginAdmin);
router.post('/cambiar-contrasena', [auth.verificarTokenUsuario, auth.isAdmin], usuarioController.cambiarContraseñaAdmin);
router.post('/crear', [auth.verificarTokenUsuario, auth.isAdmin], usuarioController.crearAdmin);
router.post('/modificar', [auth.verificarTokenUsuario, auth.isAdmin], usuarioController.modificarAdmin);
router.post('/eliminar',[auth.verificarTokenUsuario, auth.isAdmin], usuarioController.eliminarAdmin);
router.get('/', [auth.verificarTokenUsuario, auth.isAdmin], usuarioController.listarAdmin);
router.get('/:id', [auth.verificarTokenUsuario, auth.isAdmin], usuarioController.mostrarAdmin);
module.exports = router;