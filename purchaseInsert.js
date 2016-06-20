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
var sql = 'insert into purchases (date, quantity, cost, product_id) values ?;';
var values = [];
var date = [];
var quantity = [];
var cost = [];
var product_id = [];
// console.log(purchases.Purchases(1).length);
for(var x = 0; x < purchases.Purchases().length; x++){
  date.push(purchases.Purchases()[x].date);
  quantity.push(purchases.Purchases()[x].quantity);
  cost.push(purchases.Purchases()[x].cost);
  product_id.push(purchases.Purchases()[x].product_id);

  values.push([ [date[x]], [quantity[x]], [cost[x]], [product_id[x]] ]);
  // console.log(values);


  // console.log("THIS IS PURCHASES", purchases);
  // console.log("THIS IS PURCHASES.PURCHASES(1)[x]", purchases.Purchases(1)[x]);
  // date.push(x);
  // console.log(x);
// console.log(purchases.Purchases(1)[x].date);
}
// console.log(product_id);
conn.query(sql, [values], function(err, result){
  if (err) throw err;
  conn.end();
});
// console.log(values.date);
