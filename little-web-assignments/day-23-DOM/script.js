var counter = document.querySelector(".counter");

var localStorageValue = localStorage.getItem("number");

var number = 0;

if (number !== null) {
  number = Number(localStorageValue);
}

counter.textContent = number;

var button = document.querySelector(".container")

button.addEventListener("click", function(evt){
  if (evt.target.className === "plus"){
    number = number + 1;
    localStorage.setItem("number", number);
    counter.textContent = number;
  } else if(evt.target.className === "minus"){
    number = number - 1;
    localStorage.setItem("number", number);
    counter.textContent = number;
  }
});
