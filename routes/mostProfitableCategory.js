var weeklySalesfunc = require("./weeklySales");
var fs = require("fs");
exports.mostProfitableCategory = function(week) {
  var weeklySales = weeklySalesfunc.weeklySales(week);
  var purchases = fs.readFileSync('./csv/purchases.csv', "utf8");
  purchases = purchases.replace("Shop;Date;Item;Quantity;Cost;Total Cost", "").replace(/R/g, "");
  var interimArray = purchases.split('\n').join('.').split(";").join(".").split(".");
  // console.log(interimArray);
  var bought = [];
  for(x=0;x<interimArray.length - 1;x++){
    if(x % 6 === 0){
      var item = interimArray[x - 3];
      var cost = interimArray[x];
      // console.log(interimArray[x]);
    bought.push({
      item: item,
      cost: cost
    });
  }
  }
  var category = fs.readFileSync('./csv/catagories.csv', "utf8");
  category = category.replace("Product,Category\n", "");
  var interimArrayc = category.split('\n').join(".").split(',').join('.').split(".");
  var categories = [];
  for (x = 0; x < interimArrayc.length - 1; x++) {
    if (x % 2 === 0) {
      var stockItem = interimArrayc[x];
      var categorys = interimArrayc[x + 1];
      // console.log(stockItem);
      categories.push({
        "stockItem": stockItem,
        "category": categorys
      });
      // console.log(categories);

    }
  }
  var m = [];
  for (x = 0; x < bought.length; x++) {
    for (y = 0; y < weeklySales.length; y++) {
      for (z = 0; z < categories.length; z++){
      if (weeklySales[y].stockItem === bought[x].item) {
        var items = bought[x].item;
        var amountsold = weeklySales[y].sold;
        var costs = parseFloat(bought[x].cost);
        var income = weeklySales[y].income;
        var totalincome = income * amountsold;
        var profit = totalincome - costs;
        if (weeklySales[y].stockItem === categories[z].stockItem){
        var category = categories[z].category;
        m.push({item: items,
                profit: profit,
                category: category
                });
        }
      }
    }
  }
}
  var mpc = m.sort(function(a, b) {
    return parseFloat(b.profit) - parseFloat(a.profit);
});

var mostProfitableCategory = mpc[0].category;
return mostProfitableCategory;
};
