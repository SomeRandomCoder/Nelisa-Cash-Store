var fs = require('fs');
exports.week1Sales = function() {

  var sales = fs.readFileSync('../Spaza-Shop-Kata/week1.csv', "utf8");
  sales = sales.replace("Day,Date,stock item,No sold,Sales Price\n", "")

  var week1ItemsArray = sales.split('\n');

  var week1Array = [];
  for (i = 0; i < week1ItemsArray.length - 1; i++) {
    week1Array.push(week1ItemsArray[i].split(","));
  }

  var salesList = [];

  week1Array.forEach(function(array) {
    salesList.push([array[2], Number(array[3])]);
  });

  salesList.sort();
  // console.log(salesList);

  var weeklySales = [];

  for (i = 0; i < salesList.length; i++) {

    if (i % 7 === 0) {
      var stockItem = salesList[i][0];
      var sold = 0;

      for (j = 0; j < 7; j++) {
        sold += salesList[i + j][1];
      }
      weeklySales.push({
        "stockItem": stockItem,
        "sold": sold
      });
    }
  }
  console.log(weeklySales);
  return weeklySales;
};

  exports.mostPopularProduct = function(weeklySales){

  weeklySales.sort(function(a, b) {
    return b.sold - a.sold;
  });
  var MostPopularProduct = weeklySales[0];
  console.log(MostPopularProduct);
  return MostPopularProduct;
};

exports.leastPopularProduct = function(weeklySales){
  weeklySales.sort(function(a,b){
    return a.sold-b.sold;
  })
  var LeastPopularProduct = weeklySales[0];
  console.log(LeastPopularProduct);
  return LeastPopularProduct;
};

exports.week2Sales = function() {

  var sales = fs.readFileSync('../Spaza-Shop-Kata/week2.csv', "utf8");
  sales = sales.replace("Day,Date,stock item,No sold,Sales Price\n", "")

  var itemsArray = sales.split('\n');

  var week2Array = [];

  for (i = 0; i < itemsArray.length -1; i++) {
    week2Array.push(itemsArray[i].split(","));
  }

  var salesList2 = [];

  week2Array.forEach(function(index) {
    salesList2.push([index[2], Number(index[3])]);
  });

  salesList2.sort();
  //  console.log(salesList2);

  var weeklySales2 = [];

  for (i = 0; i < salesList2.length; i++) {

    if (i % 7 === 0) {
      var stockItem = salesList2[i][0];
      var sold = 0;

      for (j = 0; j < 7; j++) {
        sold += salesList2[i][1];
      }
      weeklySales2.push({
        "stockItem": stockItem,
        "sold": sold
      });
    }
  }
  console.log(weeklySales2);
  return weeklySales2;
};
exports.mostPopularProduct = function(weeklySales2){

weeklySales2.sort(function(a, b) {
  return b.sold - a.sold;
});

var MostPopularProduct = weeklySales2[0];
console.log(MostPopularProduct);
return MostPopularProduct;
};

exports.leastPopularProduct = function(weeklySales2){
  weeklySales2.sort(function(a,b){
    return a.sold-b.sold;
  })
  var LeastPopularProduct = weeklySales2[0];
  console.log(LeastPopularProduct);
  return LeastPopularProduct;
};

exports.week3Sales=function(){
  var sales = fs.readFileSync('../Spaza-Shop-Kata/week3.csv', "utf8");
  sales = sales.replace("Day,Date,stock item,No sold,Sales Price\n", "")

  var week3ItemsArray = sales.split('\n');

  var week3Array = [];
  for (i = 0; i < week3ItemsArray.length - 1; i++) {
    week3Array.push(week3ItemsArray[i].split(","));
  }

  var salesList3 = [];

  week3Array.forEach(function(array) {
    salesList3.push([array[2], Number(array[3])]);
  });

  salesList3.sort();

  var weeklySales3 = [];

  for (i = 0; i < salesList3.length; i++) {

    if (i % 7 === 0) {
      var stockItem = salesList3[i][0];
      var sold = 0;

      for (j = 0; j < 7; j++) {
        sold += salesList3[i + j][1];
      }
      weeklySales3.push({
        "stockItem": stockItem,
        "sold": sold
      });
    }
  }
  console.log(weeklySales3);
  return weeklySales3;
};

exports.mostPopularProduct=function(weeklySales3){
  weeklySales3.sort(function(a, b) {
    return b.sold - a.sold
  });

  var MostPopularProduct = weeklySales3[0];
  console.log(MostPopularProduct);
  return MostPopularProduct;
  };

  exports.leastPopularProduct = function(weeklySales3){
    weeklySales3.sort(function(a,b){
      return a.sold-b.sold;
    })
    var LeastPopularProduct = weeklySales3[0];
    console.log(LeastPopularProduct);
    return LeastPopularProduct;
  };
