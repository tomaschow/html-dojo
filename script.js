// function a (param){
//   param = param || "default";
//   console.log(param+" is the param.");
// }
// a(33333); // Handling default value

// // Objects
// var company = new Object();
// company.name = "DDF Inc.";
// company.ceo = new Object();
// company.ceo.firstName = "Van";
// company.ceo.lastName = "Darkholme";
// company["stock"] = 14440
// console.log("CEO's firstname is " + company.ceo.firstName);
// console.log(company["name"]);
// console.log("stock value is "+company.stock);
// 1. Dot notation
// 2. Bracket notation

// // Object literals
// var company = {
//   name: "DDF Inc.",
//   ceo:{
//     firstName: "Van",
//     lastName: "Darkholme",
//     fav: "come"
//   },
//   "STOCK": 100
// };
// console.log(company);

// Function factory
function makeMultiplier(multiplier){
  var newFunc = function(x){
    return multiplier * x;
  };
  return newFunc;
}
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

function doOperationOn(x, operation){
  return operation(x);
}
var result = doOperationOn(5, multiplyBy3);
console.log(result);
