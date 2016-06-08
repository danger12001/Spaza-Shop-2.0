var mysql = require('mysql');
var purchases = require('./routes/purchases');
var conn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '5550121a',
      // port: 3000,
      database: "Nelisa"
    });

var sql = "INSERT INTO purchases ( date, quantity, cost) VALUES ?";
var values = [];
var date = [];
var quantity = [];
var cost = [];
// console.log(purchases.Purchases(1).length);
for(var x = 0; x < purchases.Purchases(1).length; x++){
  // date.push([purchases.Purchases(1)[x].date]);

  // conn.query(sql, [values], function(err, result){
  //   if (err) throw err;
  //   conn.end();
  // });


  // console.log("THIS IS PURCHASES", purchases);
  // console.log("THIS IS PURCHASES.PURCHASES(1)[x]", purchases.Purchases(1)[x]);
  // date.push(x);
  // console.log(x);
// console.log(purchases.Purchases(1)[x].date);
}
console.log(date);
