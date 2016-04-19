var weeklySales = require('./weeklySales');
var fs=require('fs');

exports.mostPopularProduct1 = function(weeklySales) {

  weeklySales.sort(function(a, b) {
    return b.sold - a.sold;
  });
  var MostPopularProduct = weeklySales[0];
  // console.log(MostPopularProduct);
  return MostPopularProduct;
};

exports.mostPopularProduct2 = function(weeklySales2) {

  weeklySales2.sort(function(a, b) {
    return b.sold - a.sold;
  });

  var MostPopularProduct2 = weeklySales2[0];
  // console.log(MostPopularProduct2);
  return MostPopularProduct2;
};

exports.mostPopularProduct3 = function(weeklySales3) {
  weeklySales3.sort(function(a, b) {
    return b.sold - a.sold;
  });

  var MostPopularProduct3 = weeklySales3[0];
  // console.log(MostPopularProduct3);
  return MostPopularProduct3;
};

exports.mostPopularProduct4 = function(weeklySales4) {
  weeklySales4.sort(function(a, b) {
    return b.sold - a.sold;
  });

  var MostPopularProduct4 = weeklySales4[0];
  // console.log(MostPopularProduct4);
  return MostPopularProduct4;
};
