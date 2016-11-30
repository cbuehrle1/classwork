var counter = document.querySelector(".counter");

var number = 0;

counter.textContent = number;

var button = document.querySelector(".container")

button.addEventListener("click", function(evt){
  if (evt.target.className === "plus"){
    number = number + 1;
    counter.textContent = number;
  } else if(evt.target.className === "minus"){
    number = number - 1;
    counter.textContent = number;
  }
});
