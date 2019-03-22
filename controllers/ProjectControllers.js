'use strict'
// se crea un objeto controller tipo json
let Project = require("../models/ProjectModels");
let controller = {
    home: function(req,res){
        return res.status(200).send({
            message:'soy la home'
        });
    },
    test: function(req,res){
        return res.status(200).send({
            message:'soy el metodo test del controlador'
        });
    },
    saveProject: function(req,res){
        let project = new Project();
        let Params = req.body;
        project.nombre = Params.nombre;
        Project.apellido = Params.apellido;
        project.edad = Params.edad;
        project.ciudad = Params.ciudad;
        project.fruta = Params.fruta;
        project.animal = Params.animal;
        project.color = Params.color;
        project.save((err,projectStore)=>{
            if(err){
                return res.status(500).send({
                    mensaje: "No se ha podido guardar el documento"
                });
            }
            if(!projectStore){
                return res.status(404).send({
                    mensaje: "No se ha podido guardar el proyecto"
                }); 
            }
        });
        return res.status(200).send({
            project: projectStore,
            mensaje: "todo bien"
        });
    }   
}
module.exports = controller;