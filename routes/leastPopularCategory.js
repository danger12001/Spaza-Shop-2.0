var weeklySalesfunc = require("./weeklySales");
var fs = require("fs");
exports.leastPopularCategory = function(week) {
  var weeklySales = weeklySalesfunc.weeklySales(week);
  var category = fs.readFileSync('./csv/catagories.csv', "utf8");
  category = category.replace("Product,Category\n", "");
  var interimArray = category.split('\n').join(".").split(',').join('.').split(".");
  var categories = [];
  for (x = 0; x < interimArray.length - 1; x++) {
    if (x % 2 === 0) {
      var stockItem = interimArray[x];
      var categorys = interimArray[x + 1];
      categories.push({
        "stockItem": stockItem,
        "category": categorys
      });

    }
  }
  var oc = [];
  for (x = 0; x < categories.length; x++) {
    for (y = 0; y < weeklySales.length; y++) {
      if (weeklySales[y].stockItem == categories[x].stockItem) {
        var cat = categories[x].category;
        var amountsold = weeklySales[y].sold;
        oc.push({amountsold: amountsold,
          category: cat});
      }
    }
  }
  var lpc = oc.sort(function(a, b) {
    return parseFloat(a.amountsold) - parseFloat(b.amountsold);
});
var leastPopularCategory = lpc[0].category;
return leastPopularCategory;
};
