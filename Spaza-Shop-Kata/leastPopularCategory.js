var weeklySales = require("./weeklySales");
var fs = require("fs");

// var weeklySale = weeklySales.weeklySales();
var weeklySales1 = weeklySales.week1Sales;
var weeklySales2 = weeklySales.week2Sales;
var weeklySales3 = weeklySales.week3Sales;
var weeklySales4 = weeklySales.week4Sales;

exports.leastPopularCategoryWeek1 = function(){
    var leastPopularCategoryWeek1 =[];

    for (var i =0; i <weeklySales.length; i++){
      for(var x =0; x< categories.length; x++){
        if(weeklySales[i].stockItem === categories[x].stockItem){
          var cat = categories[x].category;
          var amountSold = weeklySales[i].sold;

          leastPopularCategoryWeek1.push({
            Category: cat,
            AmountSold: amountSold
          });
        }
      }
    }
    console.log(leastPopularCategoryWeek1);
    return leastPopularCategoryWeek1;
};

exports.leastPopularCategoryWeek2 = function(){
    var leastPopularCategoryWeek2=[];

      for(var i=0; i <weeklySales2.length; i++){
        for (var x=0; x< categories.length; x++){
          if(weeklySales2[i].stockItem === categories[x].stockItem){
            var cat = categories[x].category;
            var amountSold = weeklySales2[i].sold;

            leastPopularCategoryWeek2.push({
              category: cat,
              AmountSold: amountSold
            });
          }
        }
      }
      console.log(leastPopularCategoryWeek2);
      return leastPopularCategoryWeek2;
};

exports.leastPopularCategoryWeek3=function(){
  var leastPopularCategoryWeek3=[];

  for(var i=0; i< weeklySales3.length; i++){
    for(var x=0; x<categories.length;x++){
      if(weeklySales3[i].stockItem === categories[x].stockItem){
        var cat = categories[x].category;
        var amountSold =weeklySales3[i].sold;
        leastPopularCategoryWeek3.push({
          category: cat,
          SoldAmount: amountSold
        });
      }
    }
  }
  console.log(leastPopularCategoryWeek3);
  return leastPopularCategoryWeek3;
};

exports.leastPopularCategoryWeek4=function(){
  var leastPopularCategoryWeek4=[];

  for(var i=0; i< weeklySales4.length; i++){
    for(var x=0; x<categories.length;x++){
      if(weeklySales4[i].stockItem === categories[x].stockItem){
        var cat = categories[x].category;
        var amountSold =weeklySales4[i].sold;
        leastPopularCategoryWeek4.push({
          category: cat,
          SoldAmount: amountSold
        });
      }
    }
  }
  console.log(leastPopularCategoryWeek4);
  return leastPopularCategoryWeek4;
};
