// Chamada do sequelize
var Sequelize = require("sequelize");

// Conexão com o Banco de dados
var sequelize = new Sequelize('ClientesRhino', 'root', '988118197', {
    host:"localhost",
    dialect: 'mysql'
})

// Modulação do sequilize
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}