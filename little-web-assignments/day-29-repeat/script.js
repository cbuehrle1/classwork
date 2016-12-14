console.log('script file hooked up!');

var oneB = document.querySelector(".one");
var twoB = document.querySelector(".two");
var coolDiv = document.querySelector(".target");



oneB.addEventListener("click", function(){
  changeIt("change it", "on", "other-on");
});

twoB.addEventListener("click", function(){
  changeIt("change it different", "other-on", "on");
});

function changeIt(message, style, style1){
  coolDiv.textContent = message
  coolDiv.classList.add(style);
  coolDiv.classList.remove(style1);
}
