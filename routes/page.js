const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/memory', (req, res) => {
    res.render('memory');
});



router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/auth', (req, res) => {
    res.render('auth');
});




module.exports = router;