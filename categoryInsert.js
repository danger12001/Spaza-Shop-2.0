var mysql = require('mysql');

var conn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '5550121a',
      // port: 3000,
      database: "Nelisa"
    });

var sql = "INSERT INTO categories ( category ) VALUES ?";
var values = [["Fruit"],["Baked_Goods"],["Canned_Goods"],["Sweets"],["Cereal"],["Dairy"],["Hygiene"],["Meat"],["Other"]];

conn.query(sql, [values], function(err, result){
  if (err) throw err;
  conn.end();
});
