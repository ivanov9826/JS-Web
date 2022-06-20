const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

router.use('/', homeController);

router.use('/cube', cubeController);

module.exports = router;