const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 const cancionesRoutes = require ('./routes/canciones');

app.use('/canciones', cancionesRoutes);

app.listen(3000,()=> console.log("servidor en el puerto 3000"));
