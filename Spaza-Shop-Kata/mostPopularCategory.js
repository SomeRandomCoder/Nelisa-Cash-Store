
var weeklySales = require("./weeklySales");
var fs = require("fs");

// var weeklySale = weeklySales.weeklySales();
var weeklySales1 = weeklySales.week1Sales;
var weeklySales2 = weeklySales.week2Sales;
var weeklySales3 = weeklySales.week3Sales;
var weeklySales4 = weeklySales.week4Sales;


exports.categoryMap= function(){
  var file = fs.readFileSync("../Spaza-Shop-Kata/catagories.csv", "utf8");
  var files = file.replace(/Product,Category\n/g, "").replace(/\n/g, ",").split(",");

  category = file.replace("Product,Category\n", "");
  var processingArray = category.split('\n').join(".").split(',').join('.').split(".");
  var categories = [];
  for (x = 0; x < processingArray.length - 1; x++) {
    if (x % 2 === 0) {
      var stockItem = processingArray[x];
      var categorys = processingArray[x + 1];
      // console.log(stockItem);
      categories.push({
        "stockItem": stockItem,
        "category": categorys
      });


    }
  }
  // console.log(categories);
  return categories;
};

exports.popularCatergoryWeek1 = function(weeklySales, categories){
  var popularCatergoryWeek1=[];

  for(var i =0; i< categories.length; i++){
    for(var x=0; x < weeklySales.length;x++){
      if(weeklySales[x].stockItem === categories[i].stockItem){
        var cat = categories[i].category;
        var soldAmount =weeklySales[x].sold;

        popularCatergoryWeek1.push({
          category: cat,
          AmountSold: soldAmount
        });
      }
    }
  }
  // console.log(popularCatergoryWeek1);
  return popularCatergoryWeek1;
};

exports.popularCatergoryWeek2=function(weeklySales2, categories){
  var popularCatergoryWeek2=[];

  for(var x =0; x< categories.length; x++){
    for(var y = 0; y< weeklySales2.length; y++){
      if(categories[x].stockItem === weeklySales2[y].stockItem){
        var cat = categories[x].category;
        var amountSold= weeklySales2[y].sold;

        popularCatergoryWeek2.push({
          category: cat,
          AmountSold: amountSold
        });
      }
    }
  }
  // console.log(popularCatergoryWeek2);
  return popularCatergoryWeek2;

};

exports.popularCatergoryWeek3=function(weeklySales3, categories){
  var popularCatergoryWeek3=[];

  for (var x=0;x<weeklySales3.length;x++){
    for(var i=0; i< categories.length;i++){
        if(categories[i].stockItem === weeklySales3[x].stockItem){
          var cat = categories[i].category;
          var amountSold = weeklySales3[x].sold;
          popularCatergoryWeek3.push({
            category: cat,
            AmountSold: amountSold
          });
        }
    }
  }
  // console.log(popularCatergoryWeek3);
  return popularCatergoryWeek3;
};

exports.popularCategoryWeek4= function(weeklySales4, categories){
  var popularCategoryWeek4=[];

      for(var i =0; i< weeklySales4.length; i++){
        for(var x=0; x< categories.length;x++){
            if(weeklySales4[i].stockItem === categories[x].stockItem){
                var cat = categories[x].category;
                var amountSold = weeklySales4[i].sold;
                popularCategoryWeek4.push({
                  category: cat,
                  AmountSold : amountSold
                });
            }
        }
      }
      // console.log(popularCategoryWeek4);
      return popularCategoryWeek4;
};
