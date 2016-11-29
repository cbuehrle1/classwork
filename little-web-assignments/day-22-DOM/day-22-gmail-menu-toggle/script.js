var list = document.querySelector(".list")

list.addEventListener("click", function(evt){

  if (evt.target.tagName === "LI"){
    var listItem = document.querySelector(".toggled");
    if (listItem !== null){
      listItem.classList.remove("toggled");}
    evt.target.classList.add("toggled");
  }
});
