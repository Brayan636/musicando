const { Router } = require('express');
var express = require('express');
var router = express.Router();
var cancionesController = require("../controllers/cancionesController")
//creacion

router.get("/crear", cancionesController.crear);
router.post("/crear", cancionesController.guardado);
router.get("/",cancionesController.listado );
router.get("/:id", cancionesController.detalle);
router.get ("/editar/:id", cancionesController.editar)
router.put ("/editar/:id", cancionesController.actualizar)
router.delete ("/borrar", cancionesController.borrar)
module.exports = router;
