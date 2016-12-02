var waluigi = document.querySelector("div");

var position = 1;

var direction = "left";

setInterval(function(){

  switch(position){
    case 1:
    waluigi.classList.add("position-1");
    waluigi.classList.remove("position-2");
    console.log(position);
    break;
    case 2:
    waluigi.classList.add("position-2");
    waluigi.classList.remove("position-1");
    waluigi.classList.remove("position-3");
    console.log(position);
    break;
    case 3:
    waluigi.classList.add("position-3");
    waluigi.classList.remove("position-2");
    waluigi.classList.remove("position-4");
    console.log(position);
    break;
    case 4:
    waluigi.classList.add("position-4");
    waluigi.classList.remove("position-3");
    waluigi.classList.remove("position-5");
    console.log(position);
    break;
    case 5:
    waluigi.classList.add("position-5");
    waluigi.classList.remove("position-4");
    console.log(position);
    break;
  };

  if (direction === "left"){
    position += 1;
  } else if (direction === "right"){
    position -= 1;
  };
  if (position >= 5){
    direction = "right";
  } else if (position <= 1){
    direction = "left"
  };
}, 100);
