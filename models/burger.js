var orm = require('../config/orm');

var burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    create: function(vals, cb) {
        orm.insertOne(vals, (res) => {
            cb(res);
        });
    },
    update: function(vals, cb) {
        orm.updateOne(vals, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;