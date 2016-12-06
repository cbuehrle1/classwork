var localStorageValue = localStorage.getItem("count");

var pages = document.querySelector(".form-pages");

var pageArr = document.querySelectorAll(".page");

var nextB = document.querySelector("#next");

var prevB = document.querySelector("#prev");

var submitB = document.querySelector("#submit");

var count = localStorageValue;

console.log(count);

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
    submitB.style.display = "inline";
    console.log("count?")
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
    localStorage.setItem("count", count);
    pageArr[count - 1].style.display = "none";
    pageArr[count].style.display = "block";
    console.log(count);
    showHideButtons();
  }

});

prevB.addEventListener("click", function(){

  if (count > 0){
    count = count - 1;
    localStorage.setItem("count", count);
    pageArr[count + 1].style.display = "none";
    pageArr[count].style.display = "block";
    console.log(count);
    showHideButtons();
  }

});
