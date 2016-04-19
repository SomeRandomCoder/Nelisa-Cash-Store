var weeklySales = require('./weeklySales');
var fs = require('fs');
var weeklySales1 = weeklySales.week1Sales;
var weeklySales2 = weeklySales.week2Sales;
var weeklySales3 = weeklySales.week3Sales;
var weeklySales4 = weeklySales.week4Sales;

exports.leastPopularProduct1 = function() {
  weeklySales1.sort(function(a, b) {
    return a.sold - b.sold;
  });
  var LeastPopularProduct = weeklySales1[0];
  console.log(LeastPopularProduct);
  return LeastPopularProduct;
};

exports.leastPopularProduct2 = function() {
  weeklySales2.sort(function(a, b) {
    return a.sold - b.sold;
  });
  var LeastPopularProduct = weeklySales2[0];
  console.log(LeastPopularProduct);
  return LeastPopularProduct;
};

exports.leastPopularProduct3 = function() {
  weeklySales3.sort(function(a, b) {
    return a.sold - b.sold;
  });
  var LeastPopularProduct = weeklySales3[0];
  console.log(LeastPopularProduct);
  return LeastPopularProduct;
};

exports.leastPopularProduct4 = function() {
  weeklySales4.sort(function(a, b) {
    return a.sold - b.sold;
  });
  var LeastPopularProduct = weeklySales4[0];
  console.log(LeastPopularProduct);
  return LeastPopularProduct;
};
