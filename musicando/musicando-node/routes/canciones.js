const express = require('express');
const router = express.Router();
const controller = require("../controllers/cancionesController")

router.get("/", controller.list);
router.post("/", controller.crear );
router.get("/:id", controller.mostrar);
router.put("/:id", controller.editar);
router.post("/:id", controller.update);
router.delete("/:id", controller.borrar)
router.get("/generos", controller.generos);


module.exports = router;
