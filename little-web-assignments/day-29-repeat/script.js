console.log('script file hooked up!');

var oneB = document.querySelector(".one");
var twoB = document.querySelector(".two");
var coolDiv = document.querySelector(".target");

oneB.addEventListener("click", function(){
  changeIt();
});

twoB.addEventListener("click", function(){
  changeIt();
});

function changeIt(){
  coolDiv.textContent = "I changed it"
  coolDiv.classList.add("on");
}
