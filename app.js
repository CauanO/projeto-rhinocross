// Chamada express
const express = require("express");
const app = express();
// Chamada body-parser
const bp = require("body-parser")
// Chamada Handlebars
const { engine } = require('express-handlebars');
// Chamada public
app.use(express.static('./public'))

// Config handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

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

app.listen(8081, function () {
    console.log("Servidor ON")
})