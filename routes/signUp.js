var bcrypt = require('bcrypt');

module.exports = function(req, res, next) {

    req.getConnection(function(err, connection) {
        if (err)
            return next(err);

        var password = req.body.password;
        var admin = "";
        var locked = "";
        if(req.body.admin === "on"){
          admin = "Yes";
        }
        else {
          admin = "No";
        }
        if(req.body.locked === "on"){
          locked = "No";
        }
        else {
          locked = "No";
        }
        var data = {
            username: req.body.username,
            admin: admin,
            locked: locked,

        };
                bcrypt.hash(password, 10, function(err, hash) {
                    data.password = hash;

                    connection.query('insert into users set ?', data, function(err, data) {
                         if (err) {
                             req.flash('warning', req.body.admin);
                             res.redirect('/signup');
                         } else {
                            //  req.flash('success', "Thank you for registering, Now login");
                             res.redirect('/login');
                         }
            });
      });
    });
};
