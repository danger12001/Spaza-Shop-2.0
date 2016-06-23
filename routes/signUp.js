var bcrypt = require('bcrypt');

module.exports = function(req, res, next) {

    req.getConnection(function(err, connection) {
        if (err)
            return next(err);

        var password = req.body.password;
        var data = {
            username: req.body.username,
            admin: false,
            locked: 0,

        };

                bcrypt.hash(password, 10, function(err, hash) {
                    data.password = hash;

            connection.query('insert into users set ?', data, function(err, data) {
                if (err) {
                  if(data.username === NULL){
                    window.alert("Username Already Exists");
                    res.redirect('/signup');
                  }
                    // req.flash('warning', "Username already exists");
                }
                else {
                  // window.alert("Sign Up Success");
                    res.redirect('/login');
                }
            });
        });
      });
};
