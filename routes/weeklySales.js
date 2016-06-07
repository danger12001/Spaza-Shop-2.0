exports.weeklySales = function(week) {
  var fs = require('fs');
  var input = fs.readFileSync('./csv/week' + week + '.csv', 'utf8');
input = input.replace("Day,Date,stock item,No sold,Sales Price\n", "");
  var interimArray = input.replace(/R/g, "").split('\n');
  var processedArray = [];
  for (i = 0; i < interimArray.length - 1; i++) {
    processedArray.push(interimArray[i].split(","));
  }
    var salesList = [];
  processedArray.forEach(function(array) {
    salesList.push([array[1],array[2], Number(array[3]),Number(array[4]) ]);
  });
  salesList.sort();
  var weeklySales = [];
  for (i = 1; i < salesList.length; i++) { //maps stock item and amount sold.

    if (i % 7 === 0) {
      var date = salesList[i][0];
      var stockItem = salesList[i][1]; //if i % 7 then put that item with index 0 in stockItem (salesList index 1 = Item)
      var sold = 0; // amount sold
      var income = salesList[i][3];

if(week % 2 !== 0){
      for (j = 0; j < 7; j++) {
        sold += salesList[i + j][2]; //gets the No sold
      }
    }
    else {
      sold += salesList[i][2];
    }
      weeklySales.push({ //pushes to weeklySales
        "stockItem": stockItem,
        "sold": sold,
        "income": Number(income),
        "date": date
      });
    }
  }
  // console.log(weeklySales);
  return weeklySales;
};
