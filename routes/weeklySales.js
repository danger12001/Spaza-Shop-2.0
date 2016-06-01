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
    salesList.push([array[2], Number(array[3]),[array[4]] ]);
  });
  salesList.sort();
  var weeklySales = [];
  for (i = 1; i < salesList.length; i++) { //maps stock item and amount sold.

    if (i % 7 === 0) {
      var stockItem = salesList[i][0]; //if i % 7 then put that item with index 0 in stockItem (salesList index 0 = Item)
      var sold = 0; // amount sold
      var income = salesList[i][2];

if(week % 2 !== 0){
      for (j = 0; j < 7; j++) {
        sold += salesList[i + j][1]; //gets the No sold
      }
    }
    else {
      sold += salesList[i][1];
    }
      weeklySales.push({ //pushes to weeklySales
        "stockItem": stockItem,
        "sold": sold,
        "income": Number(income)
      });
    }
  }
  // console.log(weeklySales);
  return weeklySales;
};
