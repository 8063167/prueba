'use strict'

//importan bibliotecas para el manejo de peticiones http y archivos json
let express = require('express')
let bodyParse = require('body-parser');
//ejeuto express
let app = express();
//cargar archivo de rutas
let projectRoute = require('./routes/ProjectRoutes');
app.use(express.json());


//rutas
app.use('/api',projectRoute);
module.exports = app;
