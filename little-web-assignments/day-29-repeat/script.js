console.log('script file hooked up!');

var oneB = document.querySelector(".one");
var twoB = document.querySelector(".two");

oneB.addEventListener("click", function(){
  var coolDiv = document.querySelector(".target");
  coolDiv.textContent = "I changed it"
  coolDiv.classList.add("on");
});

twoB.addEventListener("click", function(){
  var coolDiv = document.querySelector(".target");
  coolDiv.textContent = "I changed it"
  coolDiv.classList.add("on");
});
