var weeklySales = require("./weeklySales");
var fs = require("fs");
var weeklySales1 =weeklySales.week1Sales();
var weeklySales2 = weeklySales.week2Sales();
var weeklySales3 = weeklySales.week3Sales();
var weeklySales4 = weeklySales.week4Sales();


exports.leastProfitableProduct = function() {
  var purchases = fs.readFileSync('./purchases.csv', "utf8");
  purchases = purchases.replace("Shop;Date;Item;Quantity;Cost;Total Cost", "").replace(/R/g, "");
  var interimArray = purchases.split('\n').join('.').split(";").join(".").split(".");
  // console.log(interimArray);
  var bought = [];
  for(x=0;x<interimArray.length - 1;x++){
    if(x % 6 === 0){
      var item = interimArray[x - 3];
      var cost = interimArray[x];
      // console.log(interimArray[x]);
    bought.push({
      item: item,
      cost: cost
    });
    console.log(bought);
  }
  }


  var w1 = [];
  for (x = 0; x < bought.length; x++) {
    for (y = 0; y < weeklySales1.length; y++) {
      if (weeklySales1[y].stockItem === bought[x].item) {
        var items = bought[x].item;
        var amountsold = weeklySales1[y].sold;
        var costs = parseFloat(bought[x].cost);
        var income = weeklySales1[y].income;
        var totalincome = income * amountsold;
        var profit = totalincome - costs;
        w1.push({item: items,
                profit: profit
                });
      }
    }
  }
  var lpp1 = w1.sort(function(a, b) {
    return parseFloat(a.profit) - parseFloat(b.profit);
});


var leastProfitableProduct1 = lpp1[0];
var w2 = [];
for (x = 0; x < bought.length; x++) {
  for (y = 0; y < weeklySales2.length; y++) {
    // console.log(bought[x].item);
    if (weeklySales2[y].stockItem2 === bought[x].item) {
      // console.log(weeklySales2[y].stockItem2);
      var items2 = bought[x].item;
      var amountsold2 = weeklySales2[y].sold;
      var costs2 = parseFloat(bought[x].cost);
      var income2 = weeklySales2[y].income;
      var totalincome2 = income2 * amountsold2;
      var profit2 = totalincome2 - costs2;
      w2.push({item: items2,
              profit: profit2
              });
    }
  }
}
var lpp2 = w2.sort(function(a, b) {
  return parseFloat(a.profit) - parseFloat(b.profit);

});

var leastProfitableProduct2 = lpp2[0];

var w3 = [];
for (x = 0; x < bought.length; x++) {
  for (y = 0; y < weeklySales3.length; y++) {
    if (weeklySales3[y].stockItem === bought[x].item) {
      var items3 = bought[x].item;
      var amountsold3 = weeklySales3[y].sold;
      var costs3 = parseFloat(bought[x].cost);
      var income3 = weeklySales3[y].income;
      var totalincome3 = income3 * amountsold3;
      var profit3 = totalincome3 - costs3;
      w3.push({item: items3,
              profit: profit3
              });
    }
  }
}
var lpp3 = w3.sort(function(a, b) {
  return parseFloat(a.profit) - parseFloat(b.profit);

});
var leastProfitableProduct3 = lpp3[0];

var w4 = [];
for (x = 0; x < bought.length; x++) {
  for (y = 0; y < weeklySales4.length; y++) {
    if (weeklySales4[y].stockItem === bought[x].item) {
      var items4 = bought[x].item;
      var amountsold4 = weeklySales4[y].sold;
      var costs4 = parseFloat(bought[x].cost);
      var income4 = weeklySales4[y].income;
      var totalincome4 = income4 * amountsold4;
      var profit4 = totalincome4 - costs4;
      w4.push({item: items4,
              profit: profit4
              });
    }
  }
}
var lpp4 = w4.sort(function(a, b) {
  return parseFloat(a.profit) - parseFloat(b.profit);

});

var leastProfitableProduct4 = lpp4[0];
var leastProfitableProduct = {"week1":leastProfitableProduct1.item,"week2":leastProfitableProduct2.item,"week3":leastProfitableProduct3.item,"week4":leastProfitableProduct4.item};
return leastProfitableProduct;

};
