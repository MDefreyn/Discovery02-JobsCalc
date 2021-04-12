const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')

//set html template engine
server.set('view engine', 'ejs')
//Mudar localização da pasta views
server.set('views', path.join(__dirname, 'views'))
//habilitar arquivos statics
server.use(express.static('public'))
//Usar req.body
server.use(express.urlencoded({ extended: true }))
//routes
server.use(routes)
//Listening server
server.listen(3000, () => console.log("rodando"))