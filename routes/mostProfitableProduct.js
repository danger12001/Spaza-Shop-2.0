var weeklySalesfunc = require("./weeklySales");
var fs = require("fs");
exports.mostProfitableProduct = function(week) {
  var weeklySales = weeklySalesfunc.weeklySales(week);
  var purchases = fs.readFileSync('./csv/purchases.csv', "utf8");
  purchases = purchases.replace("Shop;Date;Item;Quantity;Cost;Total Cost", "").replace(/R/g, "");
  var interimArray = purchases.split('\n').join('.').split(";").join(".").split(".");
  var bought = [];
  for(x=0;x<interimArray.length - 1;x++){
    if(x % 6 === 0){
      var item = interimArray[x - 3];
      var cost = interimArray[x];
    bought.push({
      item: item,
      cost: cost
    });
  }
  }
  var m = [];
  for (x = 0; x < bought.length; x++) {
    for (y = 0; y < weeklySales.length; y++) {
      if (weeklySales[y].stockItem === bought[x].item) {
        var items = bought[x].item;
        var amountsold = weeklySales[y].sold;
        var costs = parseFloat(bought[x].cost);
        var income = weeklySales[y].income;
        var totalincome = income * amountsold;
        var profit = totalincome - costs;
        m.push({item: items,
                profit: profit
                });
      }
    }
  }
  var mpp = m.sort(function(a, b) {
    return parseFloat(b.profit) - parseFloat(a.profit);
});

var MostProfitableProduct = mpp[0].item;
return MostProfitableProduct;
};
