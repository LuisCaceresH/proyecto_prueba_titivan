const express = require('express');
const auth = require('../middlewares/authentication');
const router = express.Router();
const rutasController = require('../controllers/rutas.controller');

router.post('/crear', [auth.verificarTokenUsuario, auth.isAdmin], rutasController.crear);
router.post('/modificar', [auth.verificarTokenUsuario, auth.isAdmin], rutasController.modificar);
router.post('/eliminar',[auth.verificarTokenUsuario, auth.isAdmin], rutasController.eliminar);
router.get('/', [auth.verificarTokenUsuario, auth.isAdmin], rutasController.listar);
router.get('/:id', [auth.verificarTokenUsuario, auth.isAdmin], rutasController.mostrar);
module.exports = router;