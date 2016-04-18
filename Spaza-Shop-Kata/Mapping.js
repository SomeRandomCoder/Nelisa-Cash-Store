var names = [
{name: "Samantha", age: 20},
{name: "Daniel", age: 105},
{name: "Tyron", age: 20},
{name: "Yoda", age :1000}
]


var age = names.filter(function(age){
  return age.age === 20;
});





// var age=[]
// for(var i=0; i< names.length; i++){
//   if(names[i].age === 20){
//     age.push(names[i]);
//   }
// }

// var name = names.map(function(x){
//   return x.name;
// })

// var name=[];
// for( var i =0; i<names.length; i++){
//   name.push(names[i].name);
// }

console.log(age);
