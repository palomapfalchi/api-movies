
const Categoria = require("./Categoria")
const database = require("../database");
const { DataTypes, Sequelize } = require("sequelize");

const Filme = database.define("filme", 
    {
        idFilme: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        }, 
        categoriaId: {
            type: DataTypes.INTEGER,
            references: {
                model: Categoria,
                key: 'idCategoria'
            }
        },
        titulo: {
            type: DataTypes.STRING,
        },
        capaFilme: {
            type: DataTypes.STRING,
        },
        descricao: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: "filme"
    });

module.exports = Filme;
