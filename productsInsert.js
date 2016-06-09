var mysql = require('mysql');

var conn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '5550121a',
      // port: 3000,
      database: "Nelisa"
    });

var sql = "INSERT INTO products ( product, category_id) VALUES ?";
var values = [["Bananas - loose", 1],["Imasi",6],["Bread",2],["Chakalaka Can",3],["Coke 500ml",4],["Cream Soda 500ml",4],["Fanta 500ml",4],["Gold Dish Vegetable Curry Can",3],["Iwisa Pap 5kg",5],["Milk 1l",6],["Mixed Sweets 5s",4],["Shampoo 1 litre",7],["Soap Bar",7],["Top Class Soy Mince",8],["Heart Chocolates",4],["Rose (plastic)",9]];

conn.query(sql, [values], function(err, result){
  if (err) throw err;
  conn.end();
});
