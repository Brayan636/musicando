const DB = require("../database/models");
const Op = DB.sequelize.Op

module.exports = {
    list:(req, res) => {
        DB.Cancion.findAll()
        .then(canciones => {
            return res.json (canciones)
        })
    }
}
