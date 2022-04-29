const express = require("express");
const produtoController = require("../controllers/produtoController");
const routes = express.Router();

routes.get("/", produtoController.listarProdutos);

routes.post("/cadastrar", (req, res) => {
    res.send("Cadastrei um novo usuário");
});



module.exports = routes;