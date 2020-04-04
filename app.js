const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes/routes');

const app = express();

// Habilitamos handlebars como template engine
app.engine('handlebars', 
  exphbs({
    defaultLayout: 'base'
  })
);
app.set('view engine', 'handlebars');

app.use('/', routes());

app.listen(3000);