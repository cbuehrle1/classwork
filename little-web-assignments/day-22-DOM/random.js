
var messages = [
  "bernard", "steve", "adam", "ronald"
]


var rand = Math.floor(Math.random() * messages.length);

//console.log(messages[rand])


var rando = Math.ceil(Math.random() * 20);

//console.log(rando)

var people = ["Miguel", "Chelsey", "David", "Chad", "Taylor", "Kyle", 'Kianna'];

var newPeople = [];

for (var i = 0; i < people.length + newPeople.length; i++){
  var random = Math.floor(Math.random() * people.length)
  var personInArray = people.splice(random, 1);
  newPeople.push(personInArray[0]);
}

console.log(newPeople)
