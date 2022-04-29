const express = require("express");
const produtoController = require("../controllers/produtoController");
const routes = express.Router();

routes.get("/", produtoController.listarFilmes);





module.exports = routes;