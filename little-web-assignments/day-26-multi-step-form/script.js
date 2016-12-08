var localStorageValue = localStorage.getItem("count");
var pages = document.querySelector(".form-pages");
var pageArr = document.querySelectorAll(".page");
var nextB = document.querySelector("#next");
var prevB = document.querySelector("#prev");
var submitB = document.querySelector("#submit");
var firstName = document.querySelector(".first-name input");
var lastName = document.querySelector(".last-name input");
var count = localStorageValue;


if (count === null) {
  count = 0;
  pageArr[0].style.display = "block";
} else {
  count = Number(localStorageValue);
  pageArr[count].style.display = "block";
  showHideButtons();
}

function showHideButtons(){

  if (count === 3){
    prevB.style.display = "inline";
    submitB.style.display = "inline";
    nextB.style.display = "none";
  } else if (count === 0){
    prevB.style.display = "none";
    nextB.style.display = "inline";
  } else {
    prevB.style.display = "inline";
    nextB.style.display = "inline";
    submitB.style.display = "none";
  }

}

var validationErr = document.createElement("p");

validationErr.textContent = "Please provide a response."

validationErr.classList.add("incomplete-p");

validationErr.style.display = "none";

pages.appendChild(validationErr);

nextB.addEventListener("click", function(){


  if (count === 0 && firstName.value === "" && lastName.value !== ""){
    firstName.classList.add("incomplete");
    validationErr.style.display = "block";
  }
  else if (count === 0 && firstName.value !== "" && lastName.value === ""){
    lastName.classList.add("incomplete");
    validationErr.style.display = "block";
  }
  else if (count === 0 && firstName.value === "" && lastName.value === ""){
    firstName.classList.add("incomplete");
    lastName.classList.add("incomplete");
    validationErr.style.display = "block";
  }
  else if (count === 1 && radioButtonLoop(1) === false){
    pageArr[count].classList.add("incomplete-buttons");
    validationErr.style.display = "block";
  }
  else if (count === 2 && radioButtonLoop(2) === false){
    pageArr[count].classList.add("incomplete-buttons");
    validationErr.style.display = "block";
  }
  else if (count < 3){
    count = count + 1;
    localStorage.setItem("count", count);
    pageArr[count - 1].style.display = "none";
    pageArr[count].style.display = "block";
    showHideButtons();
    removeErrId(validationErr);
  }


});

prevB.addEventListener("click", function(){

  if (count > 0){
    count = count - 1;
    localStorage.setItem("count", count);
    pageArr[count + 1].style.display = "none";
    pageArr[count].style.display = "block";
    showHideButtons();
  }

});

function radioButtonLoop(count) {

  var allFalse = 0;

  for (var i = 1; i < pageArr[count].children.length; i++){

    if (pageArr[count].children[i].children[0].checked === false){
      allFalse++;
    };

  }

  if (allFalse === pageArr[count].children.length - 1){
    return false;
  };

}

function removeErrId(validationErr){

  if (count === 1){
    firstName.classList.remove("incomplete");
    lastName.classList.remove("incomplete");
    validationErr.style.display = "none";
  }

  if (count === 2){
    pageArr[1].classList.remove("incomplete-buttons");
    validationErr.style.display = "none";
  }

  if (count === 3){
    pageArr[2].classList.remove("incomplete-buttons");
    validationErr.style.display = "none";
  }

}
