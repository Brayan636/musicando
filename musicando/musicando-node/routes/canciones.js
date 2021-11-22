const express = require('express');
const router = express.Router();
const controller = require("../controllers/cancionesController")

router.get("/", controller.list)
module.exports = router;
