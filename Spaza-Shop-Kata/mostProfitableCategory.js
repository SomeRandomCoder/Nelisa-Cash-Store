var weeklySales = require("./weeklySales");
var fs = require("fs");

var weeklySales1 = weeklySales.week1Sales();
var weeklySales2 = weeklySales.week2Sales();
var weeklySales3 = weeklySales.week3Sales();
var weeklySales4 = weeklySales.week4Sales();
exports.mostProfitableCategory = function() {
  // var weeklySale = weeklySales.weeklySales();


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
  }
  }
//=================================================================

  var category = fs.readFileSync('./catagories.csv', "utf8");
  category = category.replace("Product,Category\n", "");
  var interimArrayc = category.split('\n').join(".").split(',').join('.').split(".");
  var categories = [];
  for (x = 0; x < interimArrayc.length - 1; x++) {
    if (x % 2 === 0) {
      var stockItem = interimArrayc[x];
      var categorys = interimArrayc[x + 1];
      // console.log(stockItem);
      categories.push({
        "stockItem": stockItem,
        "category": categorys
      });
      // console.log(categories);

    }
  }

  //================================================================
  var w1 = [];
  for (x = 0; x < bought.length; x++) {
    for (y = 0; y < weeklySales1.length; y++) {
      for (z = 0; z < categories.length; z++){
      if (weeklySales1[y].stockItem === bought[x].item) {
        var items = bought[x].item;
        var amountsold = weeklySales1[y].sold;
        var costs = parseFloat(bought[x].cost);
        var income = weeklySales1[y].singlePrice;
        var totalincome = income * amountsold;
        var profit = totalincome - costs;
        if (weeklySales1[y].stockItem === categories[z].stockItem){
          var category = categories[z].category;
        w1.push({item: items,
                profit: profit,
                category: category
                });
        }
      }
    }
  }
}
  var mpc1 = w1.sort(function(a, b) {
    return parseFloat(b.profit) - parseFloat(a.profit);
});

var mPC1 = mpc1[0];

var w2 = [];
for (x = 0; x < bought.length; x++) {
  for (y = 0; y < weeklySales2.length; y++) {
    for (z = 0; z < categories.length; z++){
    if (weeklySales2[y].stockItem === bought[x].item) {
      var items = bought[x].item;
      var amountsold = weeklySales2[y].sold;
      var costs = parseFloat(bought[x].cost);
      var income = weeklySales2[y].singlePrice;
      var totalincome = income * amountsold;
      var profit = totalincome - costs;
      if (weeklySales2[y].stockItem === categories[z].stockItem){
        var category = categories[z].category;
      w2.push({item: items,
              profit: profit,
              category: category
              });
      }
    }
  }
}
}
var mpc2 = w2.sort(function(a, b) {
  return parseFloat(b.profit) - parseFloat(a.profit);

});

var mPC2 = mpc2[0];

var w3 = [];
for (x = 0; x < bought.length; x++) {
  for (y = 0; y < weeklySales3.length; y++) {
    for (z = 0; z < categories.length; z++){
    if (weeklySales3[y].stockItem === bought[x].item) {
      var items = bought[x].item;
      var amountsold = weeklySales3[y].sold;
      var costs = parseFloat(bought[x].cost);
      var income = weeklySales3[y].singlePrice;
      var totalincome = income * amountsold;
      var profit = totalincome - costs;
      if (weeklySales3[y].stockItem === categories[z].stockItem){
        var category = categories[z].category;
      w3.push({item: items,
              profit: profit,
              category: category
              });
      }
    }
  }
}
}
var mpc3 = w3.sort(function(a, b) {
  return parseFloat(b.profit) - parseFloat(a.profit);

});
var mPC3 = mpc3[0];

var w4 = [];
for (x = 0; x < bought.length; x++) {
  for (y = 0; y < weeklySales4.length; y++) {
    for (z = 0; z < categories.length; z++){
    if (weeklySales4[y].stockItem === bought[x].item) {
      var items = bought[x].item;
      var amountsold = weeklySales4[y].sold;
      var costs = parseFloat(bought[x].cost);
      var income = weeklySales4[y].singlePrice;
      var totalincome = income * amountsold;
      var profit = totalincome - costs;
      if (weeklySales4[y].stockItem === categories[z].stockItem){
        var category = categories[z].category;
      w4.push({item: items,
              profit: profit,
              category: category
              });
      }
    }
  }
}
}
var mpc4 = w4.sort(function(a, b) {
  return parseFloat(b.profit) - parseFloat(a.profit);

});
var mPC4 = mpc4[0];

var mostProfitableCategory = {
  "week1":mPC1.category,
  "week2":mPC2.category,
  "week3":mPC3.category,
  "week4":mPC4.category};

console.log(mostProfitableCategory);
return mostProfitableCategory;

};
