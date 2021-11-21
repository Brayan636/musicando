module.exports= function (sequelize, dataTypes){
    let alias = "Genero";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:  true
        },
        name: {
            type: dataTypes.STRING
        }
    }
    let config ={
        tableName: "generos",
        timeStamps: false
    }
    
    let Genero = sequelize.define(alias, cols, config);
    Genero.associate = function (models){
        Genero.hasMany(models.Cancion, {
            as: "canciones",
            foreignKey: "genero_id"
        })
    }
    return Genero;
    }