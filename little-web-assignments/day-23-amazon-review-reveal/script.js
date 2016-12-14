  var trigger = document.querySelector(".read-more-trigger")
  var container = document.querySelector(".container");
  var readMore = document.querySelector(".read-more");
  var readLess = document.querySelector(".read-less");
  var arrow = document.querySelector(".arrow");
  var containerHeight = document.querySelector(".client-height");
  var constrainedHeight = document.querySelector(".shown")

  var height = constrainedHeight.clientHeight;

  var heightNormal = containerHeight.clientHeight;

  container.style.maxHeight = constrainedHeight.clientHeight + "px";

  trigger.addEventListener("click", function(){

    if (container.className === "container"){
      container.style.maxHeight = heightNormal + "px";
    } else if(container.className === "container show-container"){
      container.style.maxHeight = height + "px";
    };

    container.classList.toggle("show-container");

    setTimeout(function(){
      readMore.classList.toggle("read-more");
    }, 500);
    setTimeout(function(){
      readLess.classList.toggle("read-more");
    }, 500);

    arrow.classList.toggle("arrow-rotate");
  })
