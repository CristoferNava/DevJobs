const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/routes');

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

app.use('/', routes());

app.listen(3000);