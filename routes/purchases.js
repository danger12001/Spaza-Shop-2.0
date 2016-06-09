var weeklySalesfunc = require("./weeklySales");
var fs = require("fs");
exports.Purchases = function() {
  var weeklySales = [];
  for(var x = 0;x< 4;x++){
    weeklySales = weeklySalesfunc.weeklySales(x + 1);
  }
  var purchase = fs.readFileSync('./csv/purchases.csv', "utf8");
  purchase = purchase.replace("Shop;Date;Item;Quantity;Cost;Total Cost\n", "");
  var interimArray = purchase.split('\n').join(".").split(';').join('.').split(".");

  var category = fs.readFileSync('./csv/catagories.csv', "utf8");
  category = category.replace("Product,Category\n", "");
  var interimArrayC = category.split('\n').join(".").split(',').join('.').split(".");
  var categories = [];
  var id = [];
  for(y = 0; y < 16;x++){
    id.push(x);
  }
  console.log(id);
  for (x = 0; x < interimArrayC.length - 1; x++) {
    if (x % 2 === 0) {
      var stockItem = interimArrayC[x];
      // id.push(x);
      categories.push({
        "item": stockItem,

      });
      // console.log(interimArray);

    }
  }
  // console.log(categories[0].id);
  // var id = [];
  for(var y = 0; y < categories.length;y++){
    id.push(categories[y].id);
  }

  var purchases = [];
  for (x = 0; x < interimArray.length - 1; x++) {
    if (x % 6 === 0) {
      var shop = interimArray[x];
      var date = interimArray[x + 1];
      var item = interimArray[x + 2];
      var quantity = interimArray[x + 3];
      var cost = interimArray[x + 4];
      var totalcost = interimArray[x + 5];

      // console.log(stockItem);
      purchases.push({
        "shop": shop,
        "items": item,
        "quantity": quantity,
        "cost": cost,
        "totalCost":totalcost,
        "date": date
      });
      // console.log(interimArray);
// console.log(purchases);
    }
  }
  // console.log(weeklySales1[0].stockItem);
  var op = [];
  for (x = 0; x < purchases.length; x++) {
    for (y = 0; y < weeklySales.length; y++) {
      if (weeklySales[y].stockItem == purchases[x].items) {
        var item = weeklySales[y].stockItem;
        var quantity = purchases[x].quantity;
        var totalCost = purchases[x].cost;
        var date = purchases[x].date;
        // console.log(amountsold);
        op.push({item: item,
          quantity: quantity,
          cost: totalCost.replace(/R/g, ""),
          date: date});
      }
    }
  }
  // console.log(weeklySales);
  var Purchases = op;
  return Purchases;
};
