const router = require('express').Router();

const cubeService = require('../services/cubeService')

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', async (req, res) => {
    const cube = req.body;

    if (cube.name.length < 2) {
        res.status(400).send('Invalid request');
        return;
    }

    try {
        await cubeService.save(cube);

        res.redirect('/');
    } catch (error) {
        res.status(400).send(err);
    };

});

module.exports = router;