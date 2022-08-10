const express = require('express');
const router = express.Router();
const {Page} = require('../models');
const { addPage } = require('../views');
//const index = require('../views')
router.get('/', async (req, res, next) => {
    res.send('Hello got to /wiki');
});

router.post('/', async (req, res, next) => {
    try {
        const page = await Page.create({
        title: req.body.title,
        content: req.body.content,
        });
        //res.json(page);
        res.redirect('/');
    } catch (error) { next(error) }
});

router.get('/add', async (req, res, next) => {
    //res.send(index.addPage());
    res.send(addPage());
});

module.exports = router;