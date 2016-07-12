var weeklySalesfunc = require('./weeklySales');
exports.mostPopularProduct = function(week){
  var weeklySales = weeklySalesfunc.weeklySales(week);
var mpp = weeklySales.sort(function(a, b) {
  return b.sold - a.sold;
});
var mostPopularProduct = mpp[0].stockItem;
return mostPopularProduct;

};
