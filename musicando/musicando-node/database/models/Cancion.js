module.exports= function (sequelize, dataTypes){
    let alias = "Cancion";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:  true
        },
        titulo : {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        },
       created_at:{
           type : dataTypes.DATE
       },
       updated_at:{
           type: dataTypes.DATE
       },
       genero_id :{
           type: dataTypes.INTEGER
       },
       album_id:{
           type: dataTypes.INTEGER
       },
       artista_id:{
           type: dataTypes.INTEGER
       }
    }
    let config ={
        tableName: "canciones",
        timestamps: true
    }
    
    let Cancion = sequelize.define(alias, cols, config);
    return Cancion;
    }