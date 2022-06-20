const router = require('express').Router();

const fs = require('fs/promises');

const path = require('path')

const cubes = require('../db.json');

router.get('/create' , (req , res) => {
    res.render('create')
});

router.post('/create' , (req , res) => {
    const cube = req.body;

    if(cube.name.length < 2){
        res.status(400).send('Invalid request');
        return;
    }

    cubes.push(cube);
    fs.writeFile(path.resolve('src' , 'db.json') , JSON.stringify(cubes , '' , 4))
    .then(() =>{
        res.redirect('/');
    })
    .catch(err => {
        res.status(400).send(err);
    });

});

module.exports = router;