var fs = require("fs");
var mysql = require('mysql');

var conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '5550121a',
  port: 3306,
  database: "Nelisa"
    });

    var sql = fs.readFileSync("./sql/Nelisa.sql");
    var username = "Nelisa";
    var password = "123";
    var admin = 1;
    var locked = 0;

    bcrypt.hash(password, 10, function(err, hash) {
        password = hash;
      });

      var values = [username, password, admin, locked];
      connection.query(sql, [values], function(err, data) {
          if (err) return next(err);
            conn.end();
      });
