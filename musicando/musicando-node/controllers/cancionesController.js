let db = require("../database/models");
let cancionesController = {

    crear: function (req, res){
     db.Genero.findAll()
     .then(function(generos){
         return res.render("listadoCanciones", {generos:generos});
     })
    }
}

module.exports = cancionesController;