const router = require('express').Router();
cubes = require('../db.json');


router.get('/' ,(req , res) => {
    res.render('index' , {cubes});
});

router.get('/about/' , (req , res) => {
    res.render('about');
});

router.post('/pesho' , (req , res) => {
    console.log(req.body);
    res.send('Succesfull form submit')
});

module.exports = router;