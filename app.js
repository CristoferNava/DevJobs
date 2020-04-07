const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/routes');
require('dotenv').config({path: 'variables.env'}); // to use process

// Mantenemos la sesión a la base de datos para que no esté pidiendo credenciales
// cada vez que entramos
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session); // pasamos variables al paquete

// Conexión a la base de datos
const mongoose = require('mongoose');
require('./config/db');

const app = express();

// Habilitamos handlebars como template engine
app.engine('handlebars', 
  exphbs({
    defaultLayout: 'base'
  })
);
app.set('view engine', 'handlebars');

// Configuramos los archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de la firma de las sesiones
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use('/', routes());

app.listen(process.env.PORT);