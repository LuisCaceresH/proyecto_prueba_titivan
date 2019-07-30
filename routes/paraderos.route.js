const express = require('express');
const auth = require('../middlewares/authentication');
const router = express.Router();
const paraderosController = require('../controllers/paraderos.controller');

router.post('/crear', [auth.verificarTokenUsuario, auth.isAdmin], paraderosController.crear);
router.post('/modificar', [auth.verificarTokenUsuario, auth.isAdmin], paraderosController.modificar);
router.post('/eliminar',[auth.verificarTokenUsuario, auth.isAdmin], paraderosController.eliminar);
router.get('/', [auth.verificarTokenUsuario, auth.isAdmin], paraderosController.listar);
router.get('/:id', [auth.verificarTokenUsuario, auth.isAdmin], paraderosController.mostrar);
module.exports = router;