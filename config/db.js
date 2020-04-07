const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});

// En caso de que haya un error mostrarlo
mongoose.connection.on('error', (error) => {
  console.log(error);
});

// importamos los modelos para que sean parte de la base de datos
// require('../models/Jobs');