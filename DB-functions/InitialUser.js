var fs = require("fs");
var mysql = require('mysql');
var bcrypt = require('bcrypt');
var conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '5550121a',
  port: 3306,
  database: "Nelisa2"
    });

    var sql = String(fs.readFileSync("./sql/initialUser.sql"));
    var username = "Nelisa";
    var password = "123";
    var admin = 1;
    var locked = 0;
    var email = "Nelisa@Nelisa.com";
    var values = [];

    bcrypt.hash(password, 10, function(err, hash) {
      var password = hash;
    values.push([username,password,email,admin,locked]);
    // console.log(values);

      conn.query(sql, [values], function(err, data) {
          if (err) throw(err);
            conn.end();
      });
    });
//
