var weeklySalesfunc = require("./weeklySales");
var fs = require("fs");
exports.Purchases = function() {
  var purchase = fs.readFileSync('../csv/purchases.csv', "utf8");
  purchase = purchase.replace("Shop;Date;Item;Quantity;Cost;Total Cost\n", "");
  var interimArray = purchase.split('\n').join(".").split(';').join('.').split(".");

  var category = fs.readFileSync('../csv/catagories.csv', "utf8");
  category = category.replace("Product,Category\n", "");
  var interimArrayC = category.split('\n').join(".").split(',').join('.').split(".");
  var categories = [];

  var id = [];
  for ( var q = 0; q < interimArrayC.length - 1; q++) {
    if (q % 2 === 0) {
      var stockItem = interimArrayC[q];
      var count = 0;
      for(var w = 0; w <= categories.length;w++){
        count += 1;
        id.push(count);
      }
      categories.push({
        "item": stockItem,
        "id": count
      });
      // console.log(interimArray);

      // console.log(stockItem);
    }
  }
  // console.log(categories  );

// console.log(id);
  var purchases = [];
  for (var v = 0; v < interimArray.length - 1; v++) {
    if (v % 6 === 0) {
      var shop = interimArray[v];
      var date = interimArray[v + 1];
      var item = interimArray[v + 2];
      var quantity = interimArray[v + 3];
      var cost = interimArray[v + 4];
      var totalcost = interimArray[v + 5];
      var product_id = [];


for(var z = 0; z< categories.length;z ++){
  if(item === categories[z].item){
    product_id = categories[z].id;
  }

}
      // console.log(stockItem);
      purchases.push({
        "shop": shop,
        "items": item,
        "quantity": quantity,
        "cost": cost,
        "totalCost":totalcost,
        "date": date,
        "id": product_id
      });
      // console.log(interimArray);
// console.log(product_id);
    }
  }
// console.log(purchases.length);
  // console.log(weeklySales1[0].stockItem);
  var op = [];
  for (x = 0; x < purchases.length; x++) {
    for (y = 0; y < categories.length; y++) {
      if (categories[y].item == purchases[x].items) {
        var item = purchases[x].items;
        var quantity = purchases[x].quantity;
        var totalCost = purchases[x].cost;
        var date = purchases[x].date;
        var id = purchases[x].id;
        // console.log(id);
        op.push({item: item,
          quantity: quantity,
          cost: totalCost.replace(/R/g, ""),
          date: date,
          product_id: id});
      }
    }
  }
  // console.log(op.length);
  var Purchases = op;
  return Purchases;
};
