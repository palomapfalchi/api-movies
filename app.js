const express = require("express");
const app = express();
const routes = require("./src/routes");
const db = require("./src/database");

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

db.temConexao();
app.use(express.json());
app.use(routes);
