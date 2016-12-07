window.addEventListener("scroll", function(evt){
  var nav = document.querySelector("nav");

  if (window.pageYOffset > 528){
    nav.classList.add("nav-scroll");
  } else if (window.pageYOffset < 528){
    nav.classList.remove("nav-scroll");
  }

});
