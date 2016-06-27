// var admin = document.getElementById("adminSwitch");
var bcrypt = require('bcrypt');
exports.show = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT * FROM users', function(err, results) {
            if (err) return next(err);
            res.render('users', {
                users: results,
                // admin: req.session.admintab
            });
        });
    });
};

exports.showAdd = function(req, res) {
    res.render('addUser');
};


exports.add = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        var password = req.body.password;
        var data = {
            username: req.body.username,
            admin: req.body.admin,
            locked: 0
        };

var adminSwitch = req.body.admin;
        if(adminSwitch.checked === "true"){
          console.log("true");
          data.admin = 1;
          // data.username = "BLEH";
        }
        else {
          console.log("false");
          data.admin = 0;
          // data.username = "BLAH";
        }
        bcrypt.hash(password, 10, function(err, hash) {
            data.password = hash;

            connection.query('insert into users set ?', data, function(err, data) {
                if (err) return next(err);
                res.redirect('/users');
            });
        });
    });
};


exports.get = function(req, res, next) {
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        connection.query('SELECT * FROM users WHERE id = ?', [id], function(err, rows) {
            if (err) return next(err);
            res.render('editUser', {
                data: rows[0],
                // admin: req.session.admintab
            });
        });
    });
};

exports.update = function(req, res, next) {

    var id = req.params.id;
    // var password = req.body.password;
    var data = {
        username: req.body.username,
        admin: req.body.admin,
        locked: req.body.locked
    };
    if(req.body.admin === "on"){
      data.admin = 1;
    }
    else {
      data.admin = 0;
    }
    // bcrypt.hash(password, 10, function(err, hash) {
        // data.password = hash;

        req.getConnection(function(err, connection) {
            connection.query('UPDATE users SET ? WHERE id = ?', [data, id], function(err, rows) {
                if (err) next(err);
                res.redirect('/users');
            });
        });
    // });
};

exports.delete = function(req, res, next) {
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        connection.query('DELETE FROM users WHERE id = ?', [id], function(err, rows) {
            if (err) return next(err);
            res.redirect('/users');
        });
    });
};
