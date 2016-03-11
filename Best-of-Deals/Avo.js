
exports.converting = function(str){
   var step1 = str.split(', ').join(",").replace(/for /g, '');
   var step2 = step1.split(' ').join('');
   var step3 = step2.replace(/R/g, " ").split(" ").join(",").split(",");
   var amountIndex = step3;
console.log(amountIndex);
  return amountIndex;
};

exports.perAvoPrice = function(amountIndex){
  var quantityArray = [amountIndex[0],amountIndex[2],amountIndex[4],amountIndex[6]];
  var amountArray = [amountIndex[1],amountIndex[3],amountIndex[5],amountIndex[7]];

  var dealOne = amountArray[0] / quantityArray[0];
  var dl1 = dealOne.toFixed(2);
  var dealTwo = amountArray[1] / quantityArray[1];
  var dl2 = dealTwo.toFixed(2);
  var dealThree = amountArray[2] / quantityArray[2];
  var dl3 = dealThree.toFixed(2);
  var dealFour = amountArray[3] / quantityArray[3];
  var dl4 = dealFour.toFixed(2);

  var array =[];

  array.push(dl1);
  array.push(dl2);
  array.push(dl3);
  array.push(dl4);
  console.log(array);
  return array;

};

exports.cheapestDeal = function(array) {
    var string2 = parseFloat(array[3]);
    var min= Math.min(Math, string2);
    console.log( "Deal 4 :" + " " + string2.toFixed(2));
    return string2;
 };

 exports.expensiveDeal = function(array){
   var string2=parseFloat(array[1])
   var max= Math.max(Math, string2);
   console.log(string2.toFixed(2));
   return string2;
 };

 exports.averagePrice = function(amountArray){
   var total = 0;
for(var i = 0; i < amountArray.length; i++) {
   total += amountArray[i];
}
var avg = total / amountArray.length

   console.log(avg);
   return avg;
 }
