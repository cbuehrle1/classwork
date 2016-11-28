var rightB = document.querySelector("#right")
var leftB = document.querySelector("#left")

var leftPos = 0;

rightB.addEventListener("click", function(){
  var boxy = document.querySelector(".box");
  leftPos += 50;
  boxy.style.left = leftPos + "px";
});

leftB.addEventListener("click", function(){
  var boxy = document.querySelector(".box");
  leftPos -= 50;
  boxy.style.left = leftPos + "px";
});
