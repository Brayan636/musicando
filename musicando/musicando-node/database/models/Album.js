module.exports= function (sequelize, dataTypes){
let alias = "Album";
let cols = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey:  true
    },
    nombre: {
        type: dataTypes.STRING
    },
    duracion: {
        type: dataTypes.INTEGER
    }

}
let config ={
    tableName: "albumes",
    timeStamps: false
}

let Album = sequelize.define(alias, cols, config);
Album.associate = function (models){
    Album.hasMany(models.Cancion, {
        as: "canciones",
        foreignKey: "album_id"
    })
}
return Album;
}