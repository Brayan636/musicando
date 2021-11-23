const DB = require("../database/models");
const Op = DB.sequelize.Op

module.exports = {
    list:(req, res) => {
        DB.Cancion.findAll()
        .then(canciones => {
            return res.status(200).json ({
                total: canciones.length,
                data:  canciones,
                status: 200
            })
        })
    },
    mostrar:(req, res) => {
        DB.Cancion.findByPk(req.params.id)
        .then(cancion => {
            return res.status(200).json ({
                data:  cancion,
                status: 200
})
})
},
crear:(req, res) => {
    DB.Cancion.create(req.body)
    .then(cancion => {
        return res.status(200).json ({
            data:  cancion,
            status: 200,
            created: "Listo"
})
})
},
borrar:(req, res) => {
    DB.Cancion.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(response => {
        return res.json(response) 
    })
},
generos:(req, res) => {
    DB.Cancion.findAll()
    .then(canciones, generos => {
        return res.status(200).json ({
            data:  canciones, generos,
            status: 200
})
    })
},
  editar:(req, res) => {
    DB.Cancion.findByPk(req.params.id)
    .then(function(cancion)  {
        return res.status(200).json ({
            data:  cancion, 
            status: 200
})
    })
},
update: (req, res)=>{
    DB.Cancion.update({
    titulo: req.body.titulo,
    duracion: req.body.duracion,
    genero:  req.body.genero,
    album:  req.body.album,
    artista:  req.body.artista
           
    },{ 
    where:{
        id: req.params.id
    }
})

}
}
