var names = ["name","james", "ben", "steve"]

var car = ["car","toyota", "mazda", "honda"]

var people = {};

// var objNames = {};
//
// function addNames(a, b){
//   objNames[a] = b;
// }
//
// for (var i = 1; i < names.length; i++){
//   addNames(car[0], car[i]);
//   people[names[i]] = objNames;
//   console.log(people);
// };

for (var i = 1; i < names.length; i++){

  var personName = names[i];
  var carObj = {
    car: car[i]
  };

  people[personName] = carObj;
  console.log(people);
};
