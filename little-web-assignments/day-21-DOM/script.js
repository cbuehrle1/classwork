console.log("document", window.document)
console.log("countof body children", document.body.children.length)
console.log("a text thing is", document.body.children[1])

var h2Thing = document.getElementById("silly-header")
console.log("list", h2Thing)

h2Thing.textContent = "I changed it";

var firstP = document.querySelector(".first");

console.log(firstP)

var allP = document.querySelectorAll("p");

console.log(allP)

var allLi = document.querySelectorAll("li");

console.log(allLi)

for(var i = 0; i < allLi.length; i++){
  allLi[i].textContent = "blah";
}

var listChildren = document.querySelector("ul");

console.log(listChildren)

for(var i = 0; i < listChildren.children.length; i++){
  listChildren.children[i].textContent = "another blah";
}

var newDiv = document.querySelector(".new-stuff");

var newStr = "<p>Here is a list</p><ul>"

var fruits = ["apple", "orange", "pear", "banana", "kiwi", "bernard"]

for (var i = 0; i < fruits.length; i++){
  var fruit = fruits[i];
  newStr = newStr + "<li>" + fruit + "</li>";
}

newStr = newStr + "</ul>"

newDiv.innerHTML = newStr;

console.log(newDiv)
