const database = require("../database");
const { DataTypes, Sequelize } = require("sequelize");

const Produto = database.define("produto", 
    {
        idProduto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        }, 
        nomeProduto: {
            type: DataTypes.STRING,
        },
        descricaoProduto: {
            type: DataTypes.STRING,
        }, 
        preco: {
            type: DataTypes.DOUBLE
        },
        qtdEstoque: {
            type: DataTypes.INTEGER,
        },
        Departamento_idDepto: {
            type: DataTypes.INTEGER,
            references: {
                model: Departamento,
                key: idDepto
            }
        },
        Favorito_Produto_idProduto: {
            type: DataTypes.INTEGER,
            references: {
                model: Produto,
                key: idProduto
            }
        }

    }, {
        tableName: "produto"
    });
