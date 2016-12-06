var pages = document.querySelector(".form-pages");

var pageArr = document.querySelectorAll(".page");

var nextB = document.querySelector("#next");

var prevB = document.querySelector("#prev");

var submitB = document.querySelector("#submit");

var count = 0;

pageArr[0].style.display = "block";

function showHideButtons(){
  if (count === 3){
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

nextB.addEventListener("click", function(){

  if (count < 3){
    count = count + 1;
    pageArr[count - 1].style.display = "none";
    pageArr[count].style.display = "block";
    showHideButtons();
  }

});

prevB.addEventListener("click", function(){

  if (count > 0){
    count = count - 1;
    pageArr[count + 1].style.display = "none";
    pageArr[count].style.display = "block";
    showHideButtons();
  }

});
