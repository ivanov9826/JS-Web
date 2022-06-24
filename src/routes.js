const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');

router.use('/', homeController);

router.use('/cube', cubeController);

router.use('/accessory' , accessoryController);

module.exports = router;