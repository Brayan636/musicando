let db = require("../database/models");
let cancionesController = {

    crear: function (req, res){
     db.Genero.findAll()
     .then(function(generos){
         return res.render("listadoCanciones", {generos:generos});
     })
    },
    guardado:  function(req, res) {
        db.Cancion.create({
            titulo: req.body.titulo,
            album: req.body.album,
            artista: req.body.artista,
            duracion: req.body.duracion,
            genero: req.body.genero
        });
        res.redirect("/canciones")
    },
    listado: function (req, res) {
        db.Cancion.findAll()
    
     .then(function(canciones){
         res.render("listadoCanciones", {canciones:canciones});
     })
    },
     detalle: function(req, res){
         db.cancion.findByPk(req.params.id, {
             include: [{association: "genero"}, {association:"artistas"}]
         })
         .then(function(cancion){
             res.render("detalleCancion", {cancion:cancion});
         })
        },
         editar: function(req, res){
            let pedidoCancion = db.Cancion.findByPk(req.params.id)
            let pedidoGeneros = db.Genero.findAll();
            Promise.all([pedidoCancion, pedidoGeneros])
            .then(function([cancion, generos]){
              res.render("editarCancion", {cancion:cancion, generos: generos})
            })
            },
            actualizar: function(req, res){
                  db.Cancion.update({
                    titulo: req.body.titulo,
                    album: req.body.album,
                    artista: req.body.artista,
                    duracion: req.body.duracion,
                    genero: req.body.genero
                }, {where:{
                    id: req.params.id
                }});
                res.redirect("/canciones/" + req.params.id)
            },
            borrar: function(req, res){
                db.Cancion.destroy({
                  where:{
                  id: req.params.id
              }});
              res.redirect("/canciones")
          },
    }
            
module.exports = cancionesController;