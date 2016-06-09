var mysql = require('mysql');
var purchases = require('./routes/purchases');
// var dateConverter = require('./node_modules/date');
var conn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '5550121a',
      // port: 3000,
      database: "Nelisa"
    });
// console.log(purchases.Purchases());
// var sql = "INSERT INTO purchases ( date, quantity, cost) VALUES ?";
var testSql = 'insert into purchases (date, quantity, cost, product_id) values \ ((select id from products), product.id);';
var values = [];
var date = [];
var quantity = [];
var cost = [];

// console.log(purchases.Purchases(1).length);
for(var x = 0; x < purchases.Purchases().length; x++){
  date.push(purchases.Purchases()[x].date);
  quantity.push(purchases.Purchases()[x].quantity);
  cost.push(purchases.Purchases()[x].cost);
  values.push([[date[x]], [quantity[x]], [cost[x]]]);


  // console.log("THIS IS PURCHASES", purchases);
  // console.log("THIS IS PURCHASES.PURCHASES(1)[x]", purchases.Purchases(1)[x]);
  // date.push(x);
  // console.log(x);
// console.log(purchases.Purchases(1)[x].date);
}
console.log(purchases.Purchases());
// conn.query(testSql, [values], function(err, result){
//   if (err) throw err;
//   conn.end();
// });
// console.log(values.date);
