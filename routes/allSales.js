exports.sales = function() {
var fs = require('fs');
var NoOfWeeks = fs.readdirSync("../csv/weeklySales/").length;
var input = [];
var interimArray = [];
var processedArray = [];
for (var N = 0; N < NoOfWeeks; N++) {
  var week = N + 1;
  input.push(fs.readFileSync('../csv/weeklySales/week' + week + '.csv', 'utf8'));
  input[N] = input[N].replace("Day,Date,stock item,No sold,Sales Price\n", "");
  input[N] = input[N].replace(/R/g, "").split('\n');
  input[N].pop();
  input[N] = input[N].join(",");
  input[N] = input[N].split(",");
  interimArray.push(input[N]);
}
for (var y = 0; y < interimArray.length; y++) {
  for (var x = 0; x < interimArray[y].length; x++) {

    if (x % 5 === 1) {
      processedArray.push([interimArray[y][x], interimArray[y][x + 1], interimArray[y][x + 2], interimArray[y][x + 3], interimArray[y][x + 4]]);
    }
  }
}
var weeklySales = [];
for (var i = 1; i < processedArray.length; i++) { //maps stock item and amount sold.
  var date = processedArray[i][0];
  var stockItem = processedArray[i][1]; //if i % 7 then put that item with index 0 in stockItem (salesList index 1 = Item)
  var sold = processedArray[i][2]; // amount sold
  var price = processedArray[i][3];
  var day = processedArray[i][4];
  weeklySales.push({ //pushes to weeklySales
    "stockItem": stockItem,
    "sold": sold,
    "price": Number(price),
    "date": date,
    "day": day
  });
}
console.log(weeklySales);
return weeklySales;
};
