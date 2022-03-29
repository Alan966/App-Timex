const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const connection = require('../connection')
const SubMenu_one = require('./routes/SubMenu_one')
const SubMenu_two = require('./routes/SubMenu_two')
const SubMenu_three = require('./routes/SubMenu_three')
const Image_Menu = require('./routes/Image_Menu')
const cors = require('cors')

const app = express(); 
require('dotenv').config() 

//settings 
app.set('title', 'Aplicacion hecha en Node Js')
app.set('port', 3001)

//Middlewares 
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

//Rutas 
app.use('/submenu/one', SubMenu_one)
app.use('/submenu/two', SubMenu_two)
app.use('/submenu/three', SubMenu_three)
app.use('/image', Image_Menu)

app.listen(app.get('port'), () => {
    console.log('Mi '+ app.get('title') + 'esta corriendo en el puerto ' + app.get('port'))
})