var mysql = require('mysql');
var wS = require("./routes/weeklySales");
var purchases = require("./routes/purchases");

var weeklySales1 = [];
var weeklySales2 = [];
var weeklySales3 = [];
var weeklySales4 = [];
for(var z = 0;z < wS.weeklySales(2).length;z ++ ){
  weeklySales1.push(wS.weeklySales(1)[z]);
weeklySales2.push(wS.weeklySales(2)[z]);
weeklySales3.push(wS.weeklySales(3)[z]);
weeklySales4.push(wS.weeklySales(4)[z]);
}
// console.log(weeklySales4);
var interim = weeklySales1.concat(weeklySales2);
var interim2 = weeklySales3.concat(weeklySales4);
var final = interim.concat(interim2);
// console.log(wS.weeklySales(1).length + wS.weeklySales(2).length + wS.weeklySales(3).length + wS.weeklySales(4).length);
// console.log(weeklySales.length);
// console.log(wS.weeklySales(3));
// console.log(final.length);
var item = [];
var date = [];
var sold = [];
var price = [];
var product_id = [];
var test = [];
var test2 = [];
var values = [];

for(var x = 0; x <= final.length; x++){
  for(var y = 0; y < purchases.Purchases().length ;y++){
  if(final[x].stockItem === purchases.Purchases()[y].item){
    // console.log(purchases.Purchases()[y].item);
    product_id.push(purchases.Purchases()[y].product_id);
    }

  }
values.push([[final[x].date],[product_id[x]], [final[x].sold], [final[x].income] ]);
console.log(values);
}


var conn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '5550121a',
      // port: 3000,
      database: "Nelisa"
    });
var sql = "INSERT INTO sales ( date, product_id, sold, price) VALUES ?";
// conn.query(sql, [values], function(err, result){
//   if (err) throw err;
//   conn.end();
// });
