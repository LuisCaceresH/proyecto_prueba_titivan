const express = require('express');
const auth = require('../middlewares/authentication');
const router = express.Router();
const itinerariosController = require('../controllers/itinerarios.controller');

router.post('/crear', [auth.verificarTokenUsuario, auth.isAdmin], itinerariosController.crear);
router.post('/modificar', [auth.verificarTokenUsuario, auth.isAdmin], itinerariosController.modificar);
router.post('/eliminar',[auth.verificarTokenUsuario, auth.isAdmin], itinerariosController.eliminar);
router.get('/', [auth.verificarTokenUsuario, auth.isAdmin], itinerariosController.listar);
router.get('/:id', [auth.verificarTokenUsuario, auth.isAdmin], itinerariosController.mostrar);
module.exports = router;