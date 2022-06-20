const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

router.get('/' , homeController.index);

router.get('/about' , homeController.about);

router.use('/cube' , cubeController);



module.exports = router;