// Está pegando as informaçãoes e funcionalidade do sistema operacinal
const { type } = require('os'); 
const db = require('./db');

const Cliente = db.sequelize.define('clientes', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING 
    },
    cep: {
        type: db.Sequelize.STRING 
    },
    logradouro: {
        type: db.Sequelize.STRING 
    },
    bairro: {
        type: db.Sequelize.STRING 
    },
    treina: {
        type: db.Sequelize.STRING 
    },
    message: {
        type: db.Sequelize.STRING 
    }
});


module.exports = Cliente

// Cliente.sync({force: true})