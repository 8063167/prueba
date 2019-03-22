'use strict'
let express = require('express');
//importao el controlador del proyecto
let projectControllers = require('../controllers/ProjectControllers');
//metod router express
let router = express.Router();
//se crea una ruta por get('ruta a crear'.'metodo del  del controlador')
router.get('/home',projectControllers.home);
//se crea una nueva ruta
router.get('/test',projectControllers.test);
router.post('/saveproject',projectControllers.saveProject);
module.exports = router;