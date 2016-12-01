var circle = document.querySelector("div")
var width = 0;

var id = setInterval(function(){
  width += 1;
  if (width > 80){
    clearInterval(id);
  }
  circle.style.width = width + "%";
}, 5);

var monster = document.querySelector(".monster");

var position = 1;
var direction = "right";

setInterval(function(){
  switch(position){
    case 1:
      monster.classList.add("position-1")
      monster.classList.remove("position-2")
    break;
    case 2:
      monster.classList.remove("position-1")
      monster.classList.remove("position-3")
      monster.classList.add("position-2")
    break;
    case 3:
      monster.classList.remove("position-2")
      monster.classList.add("position-3")
    break;
  };
  if (direction === "right"){
    position += 1;
  } else{
    position -= 1;
  };
  if (position >= 3){
    direction = "left";
  };
  if (position <= 1){
    direction = "right";
  };

}, 100)
