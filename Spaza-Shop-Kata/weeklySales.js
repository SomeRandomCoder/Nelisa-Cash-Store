var fs = require('fs'); //file system

exports.week1Sales = function() {

  var sales = fs.readFileSync('../Spaza-Shop-Kata/week1.csv', "utf8");
  sales = sales.replace("Day,Date,stock item,No sold,Sales Price\n", "");

  var week1ItemsArray = sales.replace(/R/g,"").split('\n');

  var week1Array = [];
  for (i = 0; i < week1ItemsArray.length - 1; i++) {
    week1Array.push(week1ItemsArray[i].split(","));
  }

  var salesList = [];

  week1Array.forEach(function(array) {
    salesList.push([array[2], Number(array[3]), Number(array[4])] );
  });

  salesList.sort();
  // console.log(salesList);

  var weeklySales = [];

  for (i = 0; i < salesList.length; i++) {
    if (i % 7 === 0 ) {
      var stockItem = salesList[i][0];
      var sold = 0;
      var singlePrice = Number(salesList[i][2]);
      for (j = 0; j < 7; j++) {
        sold += salesList[i + j][1];
      }

      weeklySales.push({
        "stockItem": stockItem,
        "sold": sold,
        "singlePrice":Number(singlePrice)

      });
    }
  }



  // var week1IncomeArray =[];
  //
  //   for(var y=0;y< weeklySales.length; y++){
  //     for(var o = 0; o < salesList.length; o++){
  //       if(weeklySales[y].stockItem === salesList[o][1])
  //       var income = weeklySales[y].sold * salesList[o][2];
  //
  //     }
  //     week1IncomeArray.push({
  //       stockItem: weeklySales[y].stockItem,
  //       income: income
  //     });
  //   }

  console.log(weeklySales);
  return weeklySales;
};
//------------------------------------------------------------------------------------------------
//WEEK 2

exports.week2Sales = function(){
var sales = fs.readFileSync('../Spaza-Shop-Kata/week2.csv', "utf8");
sales = sales.replace("Day,Date,stock item,No sold,Sales Price\n", "");

var itemsArray = sales.replace(/R/g, "").split('\n');

var week2Array = [];

for (i = 0; i < itemsArray.length - 1; i++) {
  week2Array.push(itemsArray[i].split(","));
}

var salesList2 = [];
week2Array.forEach(function(array) {
  salesList2.push([array[2], Number(array[3]), Number(array[4])]);
});

salesList2.sort();
// console.log(salesList2);
var weeklySales2 = [];

for (i = 0; i < salesList2.length; i++) {

  if (i % 7 === 0) {
    var stockItem = salesList2[i][0];
    var sold = 0;
    var singlePrice = Number(salesList2[i][2]);

    for (j = 0; j < 7; j++) {
      sold += salesList2[i][1];
    }
    weeklySales2.push({
      "stockItem": stockItem,
      "sold": sold,
      "singlePrice": singlePrice
    });
  }
}
console.log(weeklySales2);
return weeklySales2;
};
//--------------------------------------------------------------------------------------------------------
exports.week3Sales = function(){
var sales = fs.readFileSync('../Spaza-Shop-Kata/week3.csv', "utf8");
sales = sales.replace("Day,Date,stock item,No sold,Sales Price\n", "");

var week3ItemsArray = sales.replace(/R/g, "").split('\n');

var week3Array = [];
for (i = 0; i < week3ItemsArray.length - 1; i++) {
  week3Array.push(week3ItemsArray[i].split(","));
}

var salesList3 = [];

week3Array.forEach(function(array) {
  salesList3.push([array[2], Number(array[3]),Number(array[4])]);
});

salesList3.sort();

var weeklySales3 = [];

for (i = 0; i < salesList3.length; i++) {

  if (i % 7 === 0) {
    var stockItem = salesList3[i][0];
    var sold = 0;
var singlePrice = Number(salesList3[i][2]);
    for (j = 0; j < 7; j++) {
      sold += salesList3[i + j][1];
    }
    weeklySales3.push({
      "stockItem": stockItem,
      "sold": sold,
      "singlePrice": singlePrice
    });
  }
}
console.log(weeklySales3);
return weeklySales3;
};

//-----------------------------------------------------------------------------------------------------
exports.week4Sales = function(){
var sales = fs.readFileSync('../Spaza-Shop-Kata/week4.csv', "utf8");
sales = sales.replace("Day,Date,stock item,No sold,Sales Price\n", "");

var week4ItemsArray = sales.replace(/R/g, "").split('\n');

var week4Array = [];
for (i = 0; i < week4ItemsArray.length - 1; i++) {
  week4Array.push(week4ItemsArray[i].split(","));
}

var salesList4 = [];
week4Array.forEach(function(array) {
  salesList4.push([array[2], Number(array[3]),Number(array[4])]);
});

salesList4.sort();

var weeklySales4 = [];

for (i = 0; i < salesList4.length; i++) {

  if (i % 7 === 0) {
    var stockItem = salesList4[i][0];
    var sold = 0;
    var singlePrice = Number(salesList4[i][2]);

    for (j = 0; j < 7; j++) {
      sold += salesList4[i][1];
    }
    weeklySales4.push({
      "stockItem": stockItem,
      "sold": sold,
      "singlePrice": singlePrice
    });
  }
}
 console.log(weeklySales4);
 return weeklySales4
 };


//   var weeklySalesMap = {
//   "week1":weeklySales1,
//    "week2":weeklySales2,
//    "week3":weeklySales3,
//    "week4":weeklySales4 };
//
//   console.log(weeklySalesMap);
//   return weeklySalesMap;
// };
