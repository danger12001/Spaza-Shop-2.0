
var UsersDataService = require("../data-services/user-data-service");
var bcrypt = require('bcryptjs');
var co = require('co');
var mysql = require('mysql');
var password = process.env.MYSQL_PWD !== undefined ? process.env.MYSQL_PWD : '5550121a';
var dbOptions = {
  host: '127.0.0.1',
  user: process.env.MYSQL_USER || 'root',
  password: password,
  port: 3306,
  database: "Nelisa2"
};
var connection = mysql.createConnection(dbOptions);


exports.show = function(req, res, next) {
    co(function*() {
      var userDataService = new UsersDataService(connection);
      var results = yield userDataService.showUser();

        try {
            var transposedResults = [];
                          results.forEach(function(results) {
                              if (results.admin === 0) {
                                  results.admin = "No";
                              } else {
                                  results.admin = "Yes";
                              }
                              if (results.locked === 0) {
                                  results.locked = "No";
                              } else {
                                  results.locked = "Yes";
                              }
                              transposedResults.push(results);
                          });

            res.render('users', {
                users:   transposedResults,
                admin: req.session.admintab,
                user: req.session.username
            });
        } catch (err) {
            console.log(err);
        }
    });
};


  exports.showAdd = function(req, res){
    co(function*() {
      var userDataService = new UsersDataService(connection);
      var results = yield userDataService.showUser();

        try {


            res.render('addUser', {
                data:   results,
                admin: req.session.admintab,
                user: req.session.username
            });
        } catch (err) {
            console.log(err);
        }
    });

};


exports.add = function(req, res, next) {
co(function*() {
  var userDataService = new UsersDataService(connection);

    try {
      var password = req.body.password;
             var data = {
                 username: req.body.username,
                 email: req.body.email,
                 admin: 0,
                 locked: 0
             };
             bcrypt.hash(password, 10, function(err, hash) {
                         data.password = hash;
                      res.redirect('/users');
                     });
                     var results = yield userDataService.addUser(data);

    } catch (err) {
        console.log(err);
    }
});


};
exports.settingsGet = function(req, res,next){
  // var id = req.params.id;
  var user = req.params.user;
  // var username = req.session.user;
  req.getConnection(function(err, connection) {
      connection.query('SELECT * FROM users WHERE username = ?', [user], function(err, rows) {
          if (err) return next(err);
          // console.log(rows[0]);
          res.render('userSettings', {
              data: rows[0],
              user: req.session.username,
              admin: req.session.admintab
          });
      });
  });
};


exports.settingsUpdate = function(req, res, next) {
  var currentUser = req.params.user;
  req.getConnection(function(err, connection) {

      connection.query('SELECT * FROM users where username = ?', currentUser, function(err, users) {
        var user = users[0];
  var password = req.body.password;
  var NewPassword = req.body.new;


    // console.log(data.password);

    bcrypt.compare(password, user.password, function(err, match) {
        if (match) {
          if(NewPassword !== ""){
          bcrypt.hash(NewPassword, 10, function(err, hash) {
            var data = {
              username: req.body.username,
              email: req.body.email
            };
            data.password = hash;
            connection.query('UPDATE users SET ? WHERE username = ?', [data, currentUser], function(err, rows) {
              if (err) next(err);
              res.redirect('/');
            });
          });
        }
          else {
            var data = {
              username: req.body.username,
              password: user.password,
              email: req.body.email
            };
            connection.query('UPDATE users SET ? WHERE username = ?', [data, currentUser], function(err, rows) {
              if (err) next(err);
              res.redirect('/');
            });
          }
        }
        else {
          req.flash('warning', 'Current Password Incorrect');
          res.redirect("/user/" + currentUser);
        }
});

  });
});

};
exports.get = function(req, res, next) {
    co(function*() {
      var id = req.params.id;
      var userDataService = new UsersDataService(connection);
      var results = yield userDataService.getUser(id);

        try {


            res.render('editUser', {
                data:   results[0],
                admin: req.session.admintab,
                user: req.session.admintab
            });
        } catch (err) {
            console.log(err);
        }
    });
};

exports.update = function(req, res, next) {

    co(function*() {
      var id = req.params.id;
      var userDataService = new UsersDataService(connection);

        try {
          var data = {
            admin: req.body.admin,
            locked: req.body.locked
          };
          if(req.body.admin === "on"){
            data.admin = "1";
          }
          else {
            data.admin = "0";
          }
          if(req.body.lock === "on"){
            data.locked = "1";
          }
          else {
            data.locked = "0";
          }

          var results = yield userDataService.updateUser(id, data);
        res.redirect('/users');
        } catch (err) {
            console.log(err);
        }
    });
};

exports.delete = function(req, res, next) {
    co(function*() {
      var id = req.params.id;
      var userDataService = new UsersDataService(connection);

        try {
          var results = yield userDataService.deleteUser([id]);
        res.redirect('/users');
        } catch (err) {
            console.log(err);
        }
    });
};
exports.search = function(req, res, next){
  co(function*() {
    var userDataService = new UsersDataService(connection);
    var searchVal = '%'+ req.params.searchVal +'%';

      try {
        var results = yield userDataService.searchUser([searchVal]);
        res.render('usersSearchResults',{
          search : results,
          		admin: req.session.admintab, user: req.session.username,
          layout : false
        });
      } catch (err) {
          console.log(err);
      }
  });
};
