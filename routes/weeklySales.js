
exports.getData = function(week){
  var fs = require("fs");
  var input = fs.readFileSync('./csv/weeklySales/week' + week + '.csv', 'utf8');
  input = input.replace("Day,Date,stock item,No sold,Sales Price\n", "");
  return input;
};
exports.processData = function(week){
  var ws = require("./weeklySales");
var input = ws.getData(week);
var interimArray = input.replace(/R/g, "").split('\n');
var processedArray = [];
for (i = 0; i < interimArray.length - 1; i++) {
  processedArray.push(interimArray[i].split(","));
}
  var salesList = [];
processedArray.forEach(function(array) {
  salesList.push([array[1],array[2], Number(array[3]),Number(array[4]) ]);
});
return salesList;
};
exports.weeklySales = function(week){
  var ws = require("./weeklySales");
var salesList = ws.processData(week);
var weeklySales = [];
for (i = 1; i < salesList.length ; i++) {
    var date = salesList[i][0];
    var stockItem = salesList[i][1];
    var sold = salesList[i][2];
    var income = salesList[i][3];
    weeklySales.push({
      "stockItem": stockItem,
      "sold": sold,
      "income": Number(income),
      "date": date
    });
  }
  return weeklySales;
};
