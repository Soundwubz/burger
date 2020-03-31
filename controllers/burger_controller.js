var express = require('express');

var router = express.Router();

var burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.all((data) => {
        res.render("index", { burgers: data });
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create([req.body.name, 0], (result) => {
        res.json(result);
    });
});

router.put('/api/burgers/:id', (req, res) => {
    let vals = [req.body.devoured, req.body.id];
    burger.update(vals, (result) => {
        if(result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

module.exports = router;