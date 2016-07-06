
var weeklySalesfunc = require("./weeklySales");
var fs = require("fs");
exports.mostPopularCategory = function(week) {
  var weeklySales = weeklySalesfunc.weeklySales(week);

  var category = fs.readFileSync('./csv/catagories.csv', "utf8");
  category = category.replace("Product,Category\n", "");
  var interimArray = category.split('\n').join(".").split(',').join('.').split(".");
  var categories = [];
  for (x = 0; x < interimArray.length - 1; x++) {
    if (x % 2 === 0) {
      var stockItem = interimArray[x];
      var categorys = interimArray[x + 1];
      // console.log(stockItem);
      categories.push({
        "stockItem": stockItem,
        "category": categorys
      });
      // console.log(interimArray);

    }
  }
  // console.log(weeklySales1[0].stockItem);
  var oc = [];
  for (x = 0; x < categories.length; x++) {
    for (y = 0; y < weeklySales.length; y++) {
      if (weeklySales[y].stockItem == categories[x].stockItem) {
        var cat = categories[x].category;
        var amountsold = weeklySales[y].sold;
        // console.log(amountsold);
        oc.push({amountsold: amountsold,
          category: cat});
      }
    }
  }
  var mpc = oc.sort(function(a, b) {
    return parseFloat(b.amountsold) - parseFloat(a.amountsold);
});
var MostPopularCategory = mpc[0].category;
return MostPopularCategory;
};
