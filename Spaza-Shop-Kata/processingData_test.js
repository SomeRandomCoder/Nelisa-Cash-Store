// var assert = require('assert');
// // var Data =require('./processingData.js')
// var weeklySales = require('../weeklySales.js');
// var mostPopularProduct = require('../mostPopularProduct');
// var leastPopularProduct = require('../leastPopularProduct');
// var mostPopularCategory = require('../mostPopularCategory');
// var leastPopularCategory = require('../leastPopularCategory');
// var mostProfitableProduct = require('../mostProfitableProduct');
// var leastProfitableProduct = require('../leastProfitableProduct');
// var purchases = require("../Purchases");
//
// describe("week1Sales", function(){
//   it("should return a list of week1 products and quantity of each product sold in an array format.", function(){
//     var result = weeklySales.week1Sales();
//     assert.deepEqual(result,
//       [ { stockItem: 'Apples - loose', sold: 36, income: 'R2.00' },
//     { stockItem: 'Bananas - loose', sold: 47, income: 'R2.00' },
//     { stockItem: 'Bread', sold: 45, income: 'R12.00' },
//     { stockItem: 'Chakalaka Can', sold: 23, income: 'R10.00' },
//     { stockItem: 'Coke 500ml', sold: 54, income: 'R6.50' },
//     { stockItem: 'Cream Soda 500ml', sold: 22, income: 'R7.50' },
//     { stockItem: 'Fanta 500ml', sold: 33, income: 'R6.50' },
//     { stockItem: 'Gold Dish Vegetable Curry Can',
//       sold: 17,
//       income: 'R9.00' },
//     { stockItem: 'Imasi', sold: 30, income: 'R25.00' },
//     { stockItem: 'Iwisa Pap 5kg', sold: 17, income: 'R30.00' },
//     { stockItem: 'Milk 1l', sold: 39, income: 'R10.00' },
//     { stockItem: 'Mixed Sweets 5s', sold: 49, income: 'R3.00' },
//     { stockItem: 'Shampoo 1 litre', sold: 3, income: 'R30.00' },
//     { stockItem: 'Soap Bar', sold: 12, income: 'R6.00' },
//     { stockItem: 'Top Class Soy Mince', sold: 22, income: 'R12.00' } ]);
//   });
//
// });
//
// describe("week2Sales",function(){
//   it("should return the products and quantity sold for each product", function(){
//     var result = weeklySales.week2Sales('./Spaza-Shop-Kata/week2.csv');
//     assert.deepEqual(result,
//       [ { stockItem: 'Apples - loose', sold: 0 },
//   { stockItem: 'Bananas - loose', sold: 14 },
//   { stockItem: 'Bread', sold: 14 },
//   { stockItem: 'Chakalaka Can', sold: 0 },
//   { stockItem: 'Coke 500ml', sold: 98 },
//   { stockItem: 'Cream Soda 500ml', sold: 7 },
//   { stockItem: 'Fanta 500ml', sold: 0 },
//   { stockItem: 'Gold Dish Vegetable Curry Can', sold: 0 },
//   { stockItem: 'Heart Chocolates', sold: 0 },
//   { stockItem: 'Imasi', sold: 28 },
//   { stockItem: 'Iwisa Pap 5kg', sold: 7 },
//   { stockItem: 'Milk 1l', sold: 21 },
//   { stockItem: 'Mixed Sweets 5s', sold: 21 },
//   { stockItem: 'Rose (plastic)', sold: 14 },
//   { stockItem: 'Shampoo 1 litre', sold: 7 },
//   { stockItem: 'Soap Bar', sold: 7 },
//   { stockItem: 'Top Class Soy Mince', sold: 21 } ]
//
//     );
//   });
// });
//
//
// describe("mostPopularProduct1",function(){
//   it("should return the most popular product sold in week 1", function(){
//     var result = mostPopularProduct.mostPopularProduct1(
//       [ { stockItem: 'Apples - loose', sold: 36 },
//         { stockItem: 'Bananas - loose', sold: 47 },
//         { stockItem: 'Bread', sold: 45 },
//         { stockItem: 'Chakalaka Can', sold: 23 },
//         { stockItem: 'Coke 500ml', sold: 54 },
//         { stockItem: 'Cream Soda 500ml', sold: 22 },
//         { stockItem: 'Fanta 500ml', sold: 33 },
//         { stockItem: 'Gold Dish Vegetable Curry Can', sold: 17 },
//         { stockItem: 'Imasi', sold: 30 },
//         { stockItem: 'Iwisa Pap 5kg', sold: 17 },
//         { stockItem: 'Milk 1l', sold: 39 },
//         { stockItem: 'Mixed Sweets 5s', sold: 49 },
//         { stockItem: 'Shampoo 1 litre', sold: 3 },
//         { stockItem: 'Soap Bar', sold: 12 },
//         { stockItem: 'Top Class Soy Mince', sold: 22 } ]
//
//     );
//     assert.deepEqual(result, { stockItem: 'Coke 500ml', sold: 54 }
// );
//   });
// });
//
// describe("leasttPopularProduct1",function(){
//   it("should return the most popular product sold in week 1", function(){
//     var result = leastPopularProduct.leastPopularProduct1(
//       [ { stockItem: 'Apples - loose', sold: 36 },
//         { stockItem: 'Bananas - loose', sold: 47 },
//         { stockItem: 'Bread', sold: 45 },
//         { stockItem: 'Chakalaka Can', sold: 23 },
//         { stockItem: 'Coke 500ml', sold: 54 },
//         { stockItem: 'Cream Soda 500ml', sold: 22 },
//         { stockItem: 'Fanta 500ml', sold: 33 },
//         { stockItem: 'Gold Dish Vegetable Curry Can', sold: 17 },
//         { stockItem: 'Imasi', sold: 30 },
//         { stockItem: 'Iwisa Pap 5kg', sold: 17 },
//         { stockItem: 'Milk 1l', sold: 39 },
//         { stockItem: 'Mixed Sweets 5s', sold: 49 },
//         { stockItem: 'Shampoo 1 litre', sold: 3 },
//         { stockItem: 'Soap Bar', sold: 12 },
//         { stockItem: 'Top Class Soy Mince', sold: 22 } ]
//
//     );
//     assert.deepEqual(result, { stockItem: 'Shampoo 1 litre', sold: 3 }
//
// );
//   });
// });
//
//
//
//
//
// describe("mostPopularProduct2",function(){
//   it("should return the most popular product sold in week 2", function(){
//     var result = mostPopularProduct.mostPopularProduct2(
//       [ { stockItem: 'Apples - loose', sold: 0 },
//   { stockItem: 'Bananas - loose', sold: 14 },
//   { stockItem: 'Bread', sold: 14 },
//   { stockItem: 'Chakalaka Can', sold: 0 },
//   { stockItem: 'Coke 500ml', sold: 98 },
//   { stockItem: 'Cream Soda 500ml', sold: 7 },
//   { stockItem: 'Fanta 500ml', sold: 0 },
//   { stockItem: 'Gold Dish Vegetable Curry Can', sold: 0 },
//   { stockItem: 'Heart Chocolates', sold: 0 },
//   { stockItem: 'Imasi', sold: 28 },
//   { stockItem: 'Iwisa Pap 5kg', sold: 7 },
//   { stockItem: 'Milk 1l', sold: 21 },
//   { stockItem: 'Mixed Sweets 5s', sold: 21 },
//   { stockItem: 'Rose (plastic)', sold: 14 },
//   { stockItem: 'Shampoo 1 litre', sold: 7 },
//   { stockItem: 'Soap Bar', sold: 7 },
//   { stockItem: 'Top Class Soy Mince', sold: 21 } ]
//
//     );
//     assert.deepEqual(result, { stockItem: 'Coke 500ml', sold: 98 }
//
// );
//   });
// });
//
// describe("leastPopularProduct2", function(){
//   it("should return the least popular product for week 2", function(){
//   var result = leastPopularProduct.leastPopularProduct2(
// [ { stockItem: 'Apples - loose', sold: 0 },
// { stockItem: 'Bananas - loose', sold: 14 },
// { stockItem: 'Bread', sold: 14 },
// { stockItem: 'Chakalaka Can', sold: 0 },
// { stockItem: 'Coke 500ml', sold: 98 },
// { stockItem: 'Cream Soda 500ml', sold: 7 },
// { stockItem: 'Fanta 500ml', sold: 0 },
// { stockItem: 'Gold Dish Vegetable Curry Can', sold: 0 },
// { stockItem: 'Heart Chocolates', sold: 0 },
// { stockItem: 'Imasi', sold: 28 },
// { stockItem: 'Iwisa Pap 5kg', sold: 7 },
// { stockItem: 'Milk 1l', sold: 21 },
// { stockItem: 'Mixed Sweets 5s', sold: 21 },
// { stockItem: 'Rose (plastic)', sold: 14 },
// { stockItem: 'Shampoo 1 litre', sold: 7 },
// { stockItem: 'Soap Bar', sold: 7 },
// { stockItem: 'Top Class Soy Mince', sold: 21 } ]
//   );
//   assert.deepEqual(result, { stockItem: 'Heart Chocolates', sold: 0 });
// });
// });
//
// describe("week3Sales", function(){
//
//   it("should return a list of week 3 products and quantity of each product sold.", function(){
//     var result = weeklySales.week3Sales('./Spaza-Shop-Kata/week3.csv');
//     assert.deepEqual(result,
//
// [ { stockItem: 'Apples - loose', sold: 25 },
//   { stockItem: 'Bananas - loose', sold: 17 },
//   { stockItem: 'Bread', sold: 24 },
//   { stockItem: 'Chakalaka Can', sold: 17 },
//   { stockItem: 'Coke 500ml', sold: 18 },
//   { stockItem: 'Cream Soda 500ml', sold: 12 },
//   { stockItem: 'Fanta 500ml', sold: 14 },
//   { stockItem: 'Gold Dish Vegetable Curry Can', sold: 8 },
//   { stockItem: 'Imasi', sold: 25 },
//   { stockItem: 'Iwisa Pap 5kg', sold: 4 },
//   { stockItem: 'Milk 1l', sold: 30 },
//   { stockItem: 'Mixed Sweets 5s', sold: 29 },
//   { stockItem: 'Shampoo 1 litre', sold: 4 },
//   { stockItem: 'Soap Bar', sold: 8 },
//   { stockItem: 'Top Class Soy Mince', sold: 12 } ]
//
//     );
//   });
// });
//
// describe("mostPopularProduct3",function(){
//   it("should return the most popular product sold in week 3", function(){
//     var result = mostPopularProduct.mostPopularProduct3(
//       [ { stockItem: 'Apples - loose', sold: 25 },
//         { stockItem: 'Bananas - loose', sold: 17 },
//         { stockItem: 'Bread', sold: 24 },
//         { stockItem: 'Chakalaka Can', sold: 17 },
//         { stockItem: 'Coke 500ml', sold: 18 },
//         { stockItem: 'Cream Soda 500ml', sold: 12 },
//         { stockItem: 'Fanta 500ml', sold: 14 },
//         { stockItem: 'Gold Dish Vegetable Curry Can', sold: 8 },
//         { stockItem: 'Imasi', sold: 25 },
//         { stockItem: 'Iwisa Pap 5kg', sold: 4 },
//         { stockItem: 'Milk 1l', sold: 30 },
//         { stockItem: 'Mixed Sweets 5s', sold: 29 },
//         { stockItem: 'Shampoo 1 litre', sold: 4 },
//         { stockItem: 'Soap Bar', sold: 8 },
//         { stockItem: 'Top Class Soy Mince', sold: 12 } ]
//
//     );
//     assert.deepEqual(result,{ stockItem: 'Milk 1l', sold: 30 }
//
// );
//   });
// });
// describe("leastPopularProduct3",function(){
//   it("should return the most popular product sold in week 3", function(){
//     var result = leastPopularProduct.leastPopularProduct3(
//       [ { stockItem: 'Apples - loose', sold: 25 },
//         { stockItem: 'Bananas - loose', sold: 17 },
//         { stockItem: 'Bread', sold: 24 },
//         { stockItem: 'Chakalaka Can', sold: 17 },
//         { stockItem: 'Coke 500ml', sold: 18 },
//         { stockItem: 'Cream Soda 500ml', sold: 12 },
//         { stockItem: 'Fanta 500ml', sold: 14 },
//         { stockItem: 'Gold Dish Vegetable Curry Can', sold: 8 },
//         { stockItem: 'Imasi', sold: 25 },
//         { stockItem: 'Iwisa Pap 5kg', sold: 4 },
//         { stockItem: 'Milk 1l', sold: 30 },
//         { stockItem: 'Mixed Sweets 5s', sold: 29 },
//         { stockItem: 'Shampoo 1 litre', sold: 4 },
//         { stockItem: 'Soap Bar', sold: 8 },
//         { stockItem: 'Top Class Soy Mince', sold: 12 } ]
//
//     );
//     assert.deepEqual(result, { stockItem: 'Shampoo 1 litre', sold: 4 }
// );
//   });
// });
//
//
// describe("week4Sales", function(){
//
//   it("should return a list of week 4 products and quantity of each product sold.", function(){
//     var result = weeklySales.week4Sales('./Spaza-Shop-Kata/week4.csv');
//     assert.deepEqual(result,
//       [ { stockItem: 'Apples - loose', sold: 7 },
//   { stockItem: 'Apples - loose', sold: 56 },
//   { stockItem: 'Bananas - loose', sold: 35 },
//   { stockItem: 'Bread', sold: 35 },
//   { stockItem: 'Chakalaka Can', sold: 21 },
//   { stockItem: 'Coke 500ml', sold: 21 },
//   { stockItem: 'Cream Soda 500ml', sold: 0 },
//   { stockItem: 'Fanta 500ml', sold: 7 },
//   { stockItem: 'Gold Dish Vegetable Curry Can', sold: 7 },
//   { stockItem: 'Gold Dish Vegetable Curry Can', sold: 63 },
//   { stockItem: 'Imasi', sold: 42 },
//   { stockItem: 'Iwisa Pap 5kg', sold: 21 },
//   { stockItem: 'Milk 1l', sold: 56 },
//   { stockItem: 'Mixed Sweets 5s', sold: 21 },
//   { stockItem: 'Shampoo 1 litre', sold: 0 },
//   { stockItem: 'Soap Bar', sold: 7 },
//   { stockItem: 'Top Class Soy Mince', sold: 0 },
//   { stockItem: 'Top Class Soy Mince', sold: 63 } ]
//      );
//   });
// });
//
// describe("mostPopularProduct4",function(){
//   it("should return the most popular product sold in week 4", function(){
//     var result = mostPopularProduct.mostPopularProduct4(
//       [ { stockItem: 'Apples - loose', sold: 7 },
//   { stockItem: 'Apples - loose', sold: 56 },
//   { stockItem: 'Bananas - loose', sold: 35 },
//   { stockItem: 'Bread', sold: 35 },
//   { stockItem: 'Chakalaka Can', sold: 21 },
//   { stockItem: 'Coke 500ml', sold: 21 },
//   { stockItem: 'Cream Soda 500ml', sold: 0 },
//   { stockItem: 'Fanta 500ml', sold: 7 },
//   { stockItem: 'Gold Dish Vegetable Curry Can', sold: 7 },
//   { stockItem: 'Gold Dish Vegetable Curry Can', sold: 63 },
//   { stockItem: 'Imasi', sold: 42 },
//   { stockItem: 'Iwisa Pap 5kg', sold: 21 },
//   { stockItem: 'Milk 1l', sold: 56 },
//   { stockItem: 'Mixed Sweets 5s', sold: 21 },
//   { stockItem: 'Shampoo 1 litre', sold: 0 },
//   { stockItem: 'Soap Bar', sold: 7 },
//   { stockItem: 'Top Class Soy Mince', sold: 0 },
//   { stockItem: 'Top Class Soy Mince', sold: 63 } ]
//
//     );
//     assert.deepEqual(result, { stockItem: 'Gold Dish Vegetable Curry Can', sold: 63 }
//
//
// );
//   });
// });
// describe("leastPopularProduct4",function(){
//   it("should return the most popular product sold in week 4", function(){
//     var result = leastPopularProduct.leastPopularProduct4(
//       [ { stockItem: 'Apples - loose', sold: 7 },
//     { stockItem: 'Apples - loose', sold: 56 },
//     { stockItem: 'Bananas - loose', sold: 35 },
//     { stockItem: 'Bread', sold: 35 },
//     { stockItem: 'Chakalaka Can', sold: 21 },
//     { stockItem: 'Coke 500ml', sold: 21 },
//     { stockItem: 'Cream Soda 500ml', sold: 0 },
//     { stockItem: 'Fanta 500ml', sold: 7 },
//     { stockItem: 'Gold Dish Vegetable Curry Can', sold: 7 },
//     { stockItem: 'Gold Dish Vegetable Curry Can', sold: 63 },
//     { stockItem: 'Imasi', sold: 42 },
//     { stockItem: 'Iwisa Pap 5kg', sold: 21 },
//     { stockItem: 'Milk 1l', sold: 56 },
//     { stockItem: 'Mixed Sweets 5s', sold: 21 },
//     { stockItem: 'Shampoo 1 litre', sold: 0 },
//     { stockItem: 'Soap Bar', sold: 7 },
//     { stockItem: 'Top Class Soy Mince', sold: 0 },
//     { stockItem: 'Top Class Soy Mince', sold: 63 } ]
//
//
//     );
//     assert.deepEqual(result,{ stockItem: 'Top Class Soy Mince', sold: 0 }
// );
//   });
// });
