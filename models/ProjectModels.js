'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
//esquema de la bd.
let projectSchema = Schema({
    nombre: String,
    Apellido: String,
    Ciudad: String,
    fruta: String,
    color: String,
    animal: String,
    edad: Number
});
//Mongoose.model(´nombre coleccion´,'esquema de la coleccion')
module.exports = mongoose.model('cursos',projectSchema);
