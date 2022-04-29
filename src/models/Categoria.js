const database = require("../database");
const { DataTypes, Sequelize } = require("sequelize");

const Categoria = database.define("categoria", 
    {
        idCategoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        }, 
        genero: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: "categoria"
    });

    module.exports = Categoria;