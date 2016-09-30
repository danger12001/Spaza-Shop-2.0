var mysql = require('mysql');
var wS = require("../routes/allSales");
var purchases = require('../routes/purchases');
var fs = require('fs');
var bcrypt = require('bcryptjs');
var final = wS.sales();

exports.insert = function(){

var date = [];
var sold = [];
var price = [];
var product = [];
var values3 = [];
var id= [];
var product_ids = [{item: "Bananas - loose", id : 1},{item: "Imasi", id : 2},{item: "Bread", id : 3},{item: "Chakalaka Can", id : 4},{item: "Coke 500ml", id : 5},{item: "Cream Soda 500ml", id : 6},{item: "Fanta 500ml", id : 7},{item: "Gold Dish Vegetable Curry Can", id : 8},{item: "Iwisa Pap 5kg", id : 9},{item: "Milk 1l", id : 10},{item: "Mixed Sweets 5s", id : 11},{item: "Shampoo 1 litre", id : 12},{item: "Soap Bar", id : 13},{item: "Top Class Soy Mince", id : 14},{item: "Heart Chocolates", id : 15},{item: "ose (plastic)", id : 16},{item: "Apples - loose", id : 17},{item: "Valentine Cards", id : 18}];

var values4 = [];
var date2 = [];
var quantity2 = [];
var cost2 = [];
var product_id2 = [];
for(var z = 0; z < purchases.Purchases().length; z++){
  date2.push(new Date(purchases.Purchases()[z].date));
  quantity2.push(purchases.Purchases()[z].quantity);
  cost2.push(purchases.Purchases()[z].cost);
  product_id2.push(purchases.Purchases()[z].product_id);
  values4.push([ [date2[z]], [quantity2[z]], [cost2[z]], [product_id2[z]] ]);
}


for(var x = 0; x < final.length; x++){
  date.push(new Date(final[x].date));
    product.push(final[x].stockItem);
for(var y = 0; y < product_ids.length;y++){
    if(product[x] == product_ids[y].item){
      id.push(product_ids[y].id);
    }
  }
sold.push(final[x].sold);
price.push(final[x].price);
values3.push([[date[x]],[id[x]], [sold[x]], [price[x]]]);
}

var conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '5550121a',
  port: 3306,
  database: "Nelisa2"
    });

var sql1 = "INSERT INTO categories  ( category ) VALUES ?";
var values1 = [["Fruit"],["Baked Goods"],["Canned Goods"],["Sweets"],["Cereal"],["Dairy"],["Hygiene"],["Meat"],["Other"]];
var sql2 = "INSERT INTO products ( product, category_id, price) VALUES ?";
var values2 = [["Bananas - loose", 1, 2],["Imasi",6, 25],["Bread",2,12],["Chakalaka Can",3,10],["Coke 500ml",4,6.5],["Cream Soda 500ml",4,7.5],["Fanta 500ml",4, 6.5],["Gold Dish Vegetable Curry Can",3, 9],["Iwisa Pap 5kg",5, 30],["Milk 1l",6, 10],["Mixed Sweets 5s",4, 2],["Shampoo 1 litre",7, 30],["Soap Bar",7, 6],["Top Class Soy Mince",8, 12],["Heart Chocolates",4, 35],["Rose (plastic)",9, 15],["Apples - loose",1, 2],["Valentine Cards",9,4]];
var sql3 = "INSERT INTO sales ( date, product_id, sold, price) VALUES ?";
var sql4 = 'insert into purchases (date, quantity, cost, product_id) values ?';
var sql = String(fs.readFileSync("./DB-functions/sql/initialUser.sql"));
var username = "Nelisa";
var password = "123";
var admin = 1;
var locked = 0;
var email = "Nelisa@Nelisa.com";
var values = [];

bcrypt.hash(password, 10, function(err, hash) {
  var password = hash;
values.push([username,email,password,admin,locked]);
  conn.query(sql, [values], function(err, data) {
      if (err) throw(err);
    });
conn.query(sql1, [values1], function(err, result){
  if (err) throw err;
});
  conn.query(sql2, [values2], function(err, result){
    if (err) throw err;
  });
    conn.query(sql3, [values3], function(err, result){
      if (err) throw err;
    });
      conn.query(sql4, [values4], function(err, result){
        if (err) throw err;
      });
    });
  };
