var express = require('express');

var router = express.Router();

var burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.all((data) => {
        res.render("index", { burgers: data });
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create([req.body.name, req.body.devoured], (result) => {
        res.json(result);
    });
});

router.put('/api/burgers/:id', (req, res) => {
    console.log(req.body);
});

module.exports = router;