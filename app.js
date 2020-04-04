const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('Listo para crear la aplicación!');
});

app.listen(3000);