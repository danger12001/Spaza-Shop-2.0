var mysql = require('mysql');
var wS = require("./routes/weeklySales");
var purchases = require("./routes/purchases");

var weeklySales1 = [];
var weeklySales2 = [];
var weeklySales3 = [];
var weeklySales4 = [];
for(var z = 0;z < wS.weeklySales(1).length;z ++ ){
  weeklySales1.push(wS.weeklySales(1)[z]);
}
for(var s = 0;s < wS.weeklySales(2).length;s ++ ){
  weeklySales2.push(wS.weeklySales(2)[s]);
}
for(var d = 0;d < wS.weeklySales(3).length;d ++ ){
  weeklySales3.push(wS.weeklySales(3)[d]);
}
for(var a = 0;a < wS.weeklySales(4).length;a ++ ){
  weeklySales4.push(wS.weeklySales(4)[a]);
}
// weeklySales3.push(wS.weeklySales(3)[z]);
// weeklySales2.push(wS.weeklySales(2)[z]);
// weeklySales4.push(wS.weeklySales(4)[z]);
// console.log(weeklySales4);
var interim = weeklySales1.concat(weeklySales2);
var interim2 = weeklySales3.concat(weeklySales4);
var final = interim.concat(interim2);

var date = [];
var sold = [];
var price = [];
var product = [];
var values = [];
// console.log(final[0].date);
// final.forEach(function(x){
//   date.push(x.date);
//   sold.push(x.sold);
//   price.push(x.price);
//   product.push(x.product);
//   console.log(date);
var id= [];
var product_ids = [{item: "Bananas - loose", id : 1},{item: "Imasi", id : 2},{item: "Bread", id : 3},{item: "Chakalaka Can", id : 4},{item: "Coke 500ml", id : 5},{item: "Cream Soda 500ml", id : 6},{item: "Fanta 500ml", id : 7},{item: "Gold Dish Vegetable Curry Can", id : 8},{item: "Iwisa Pap 5kg", id : 9},{item: "Milk 1l", id : 10},{item: "Mixed Sweets 5s", id : 11},{item: "Shampoo 1 litre", id : 12},{item: "Soap Bar", id : 13},{item: "Top Class Soy Mince", id : 14},{item: "Heart Chocolates", id : 15},{item: "ose (plastic)", id : 16},{item: "Apples - loose", id : 17},{item: "Valentine Cards", id : 18}];
for(var x = 0; x < final.length; x++){
  // if(final[x] !== undefined){
  // console.log(x);
    date.push(final[x].date);
    product.push(final[x].stockItem);
for(var y = 0; y < product_ids.length;y++){
    // console.log(final.length);
    if(product[x] == product_ids[y].item){
      id.push(product_ids[y].id);
    }
  }
// console.log(id);
sold.push(final[x].sold);
price.push(final[x].income);
values.push([[date[x]],[id[x]], [sold[x]], [price[x]]]);
// console.log(id);
}
// console.log(values);
// console.log(id[14]);

var conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '5550121a',
  port: 3306,
  database: "Nelisa"
    });
var sql = "INSERT INTO sales ( date, product_id, sold, price) VALUES ?";
conn.query(sql, [values], function(err, result){
  if (err) throw err;
  conn.end();
});
