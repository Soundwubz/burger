var connection = require('./connection');

var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", (err, result) => {
            if (err) throw err;
            cb(result);
        }); 
    },
    insertOne: function(vals, cb) {
        let query = `INSERT INTO burgers (burger_name, devoured)
        VALUES (?, ?)`;
        connection.query(query, vals, (err, result) => {
            if(err) throw err;
            cb(result);
        });
    },
    updateOne: function(vals, cb) {
        let query = `UPDATE burgers SET devoured = ? WHERE id = ?`;
        connection.query(query, vals, (err, result) => {
            if(err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;