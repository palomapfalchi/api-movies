const Categoria = require("../models/Categoria");
const Filme = require("../models/Filme");

const produtoController = {
    listarFilmes: (req, res) => {
        res.json([{nome: "Produto1"}, {nome: "Produto2"}]);
    }
};

module.exports = produtoController;