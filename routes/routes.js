const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

module.exports = () => {
  router.get('/', controllers.home);

  return router;
};