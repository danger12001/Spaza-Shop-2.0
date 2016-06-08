var weeklySalesfunc = require("./weeklySales");
var fs = require("fs");
exports.Purchases = function(week) {
  var weeklySales = weeklySalesfunc.weeklySales(week);
  var purchase = fs.readFileSync('./csv/purchases.csv', "utf8");
  purchase = purchase.replace("Shop;Date;Item;Quantity;Cost;Total Cost\n", "");
  var interimArray = purchase.split('\n').join(".").split(';').join('.').split(".");

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
          totalCost: totalCost,
          date: date});
      }
    }
  }
  var Purchases = op;
  return Purchases;
};
