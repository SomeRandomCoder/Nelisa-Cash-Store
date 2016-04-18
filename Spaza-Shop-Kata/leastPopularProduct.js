var weeklySales = require('./weeklySales');
var fs = require('fs');

exports.leastPopularProduct1 = function(weeklySales) {
  weeklySales.sort(function(a, b) {
    return a.sold - b.sold;
  });
  var LeastPopularProduct = weeklySales[0];
  console.log(LeastPopularProduct);
  return LeastPopularProduct;
};

exports.leastPopularProduct2 = function(weeklySales2) {
  weeklySales2.sort(function(a, b) {
    return a.sold - b.sold;
  })
  var LeastPopularProduct = weeklySales2[0];
  console.log(LeastPopularProduct);
  return LeastPopularProduct;
};

exports.leastPopularProduct3 = function(weeklySales3) {
  weeklySales3.sort(function(a, b) {
    return a.sold - b.sold;
  });
  var LeastPopularProduct = weeklySales3[0];
  console.log(LeastPopularProduct);
  return LeastPopularProduct;
};

exports.leastPopularProduct4 = function(weeklySales4) {
  weeklySales4.sort(function(a, b) {
    return a.sold - b.sold;
  });
  var LeastPopularProduct = weeklySales4[0];
  console.log(LeastPopularProduct);
  return LeastPopularProduct;
};
