'use strict'
//importo biblioteca ara conexion com mongodb
let mongoose = require('mongoose');
let app = require("./app");
let port = 3700;

//promesa para conexion con mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cosita')
    .then(() => {
        console.log('Coneccion a la base de datos establecia dcon exito');
    })
    .catch(err => {
        console.log(err);
    });
    console.log('prueba');
    app.listen(port, ()=>{
        console.log("corriendo correctamente")
    });
    
