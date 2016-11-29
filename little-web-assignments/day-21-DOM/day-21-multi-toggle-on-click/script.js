var button = document.querySelector(".container")


button.addEventListener("click", function(evt){
  if (evt.target.tagName === 'DIV') {
    evt.target.classList.toggle("on");
  }
});
