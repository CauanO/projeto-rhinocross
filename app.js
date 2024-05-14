// Chamada express
const express = require("express");
const app = express();
// Chamada body-parser
const bodyParser = require("body-parser")
// Chamada Handlebars
const { engine } = require('express-handlebars');
// Chamada public
app.use(express.static('./public'))
// Chamada do module
var Post = require('./models/Clientes');
const { where } = require('sequelize');

// Config handlebars
app.engine('handlebars', engine({
    defaultLayout: 'main', runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Config Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rota home
app.get('/', function (req, res) {
    res.render('home')
})

// Rota contatos
app.get('/contact', function (req, res) {
    res.render('contact')
})

// Rota planos
app.get('/properties', function (req, res) {
    res.render('properties')
})

// Rota de sucesso
app.get('/sucesso', function (req, res) {
    res.render('sucesso')
})

// Rota onde vai aparecer os clientes que preecheram o form
app.get('/dados', function (req, res) {
    Post.findAll({ order: [['id', 'DESC']] }).then(function (posts) {
        res.render('dados', { posts: posts })
    })
})

// Rota do form
app.post('/add', function (req, res) {
    Post.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        cep: req.body.cep,
        logradouro: req.body.logradouro,
        bairro: req.body.bairro,
        treina: req.body.treina,
        message: req.body.message
    }).then(function () {
        res.redirect('/sucesso')
    }).catch(function (erro) {
        res.send("Hover um error" + erro)
    })
})

app.listen(8081, function () {
    console.log("Servidor ON")
})