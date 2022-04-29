const produtoController = {
    listarProdutos: (req, res) => {
        res.json([{nome: "Produto1"}, {nome: "Produto2"}]);
    }
};

module.exports = produtoController;