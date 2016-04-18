var weeklySales = require("./weeklySales");

var fs = require("fs");

var weeklySale = weeklySales.weeklySales();
var weeklySales1 = weeklySale.week1;
var weeklySales2 = weeklySale.week2;
var weeklySales3 = weeklySale.week3;
var weeklySales4 = weeklySale.week4;


exports.singlePricePerItem = function(saleList){
  var array =[];
  var singlePrice=[];
  var price = 0;

  for(var x =0;x<salesList.length;x++){
    if (x % 7 === 0) {
      var stockItem = salesList[x][0];
      array.push({
        item: stockItem
      });
    }
  }

  for(var i =0; i< array.length; i++){
    for(var y=0; y < salesList.length;y++){
      if(array[i].item === salesList[y][0] && y %7 === 0 ){
        price = salesList[y][2];
        var stockItems = array[i].item;
        var prices = Number(price.replace(/R/g, ""));
        singlePrice.push({
          item:stockItems,
          price: parseFloat(prices)
        });
      }
    }
  }
  console.log(singlePrice);
  return singlePrice;
};
