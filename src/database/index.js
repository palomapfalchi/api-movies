const Sequelize = require("sequelize");

const DB_NOME = "iconeVirtual";
const DB_USUARIO = "root";
const DB_SENHA = "mysql";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

let db = {};

try {
    db = new Sequelize(DB_NOME, DB_USUARIO, DB_SENHA, DB_CONFIG);
} catch (error) {
    console.error("Erro ao tentar conectar com o banco de dados");
}


async function temConexao() {
    try {
        await db.authenticate();
        console.log("Banco de dados conectado!");
    } catch (error) {
        console.error("Erro ao tentar se conectar ao banco de dados");
    }
};

//exporta essa função no nosso db 
Object.assign(db, {
    temConexao,
});

module.exports = db;

