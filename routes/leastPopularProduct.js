var weeklySalesfunc = require('./weeklySales');
exports.leastPopularProduct = function(week){
  var weeklySales = weeklySalesfunc.weeklySales(week);
var lpp = weeklySales.sort(function(a, b) {
  return a.sold - b.sold;
});
var leastPopularProduct = lpp[0].stockItem;
console.log(leastPopularProduct);
return leastPopularProduct;

};
