var pages = document.querySelector(".form-pages");

var pageArr = document.querySelectorAll(".page");

var nextB = document.querySelector("#next");

var prevB = document.querySelector("#prev");

var submitB = document.querySelector("#submit");

var count = 0;

pageArr[0].style.display = "block";

nextB.addEventListener("click", function(){

  if (count < 3){
    count = count + 1;
    pageArr[count].style.display = "block";
  }


});

prevB.addEventListener("click", function(){

  if (count > 0){
    count = count - 1;
    pageArr[count].style.display = "block";
  }
  
});
