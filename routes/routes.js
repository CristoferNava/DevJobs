const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.send('Hola desde el back :0');
  });

  return router;
};