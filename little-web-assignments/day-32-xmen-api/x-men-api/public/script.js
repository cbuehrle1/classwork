(function(){

  var promise = $.ajax({
    url: "/api/x-men"
  });

  var apiData;
  var mutantList = document.querySelector(".mutant-list");

  promise.done(function(data){
    apiData = data;

    for (var i = 0; i < data.xmen.length; i++){
      var xman = data.xmen[i];
      var li = document.createElement("li");
      li.textContent = xman.character
      li.setAttribute("data-index", i);
      mutantList.appendChild(li);
    }

  });

  var template = document.querySelector("#character-template");
  var templateHTML = template.innerHTML;

  mutantList.addEventListener("click", function(evt) {

    var attr = evt.target.getAttribute("data-index");

    var currentlySelected = document.querySelector(".selected")
    if (currentlySelected != null){
      currentlySelected.classList.remove("selected");
    }
    evt.target.classList.add("selected");

    var xman = apiData.xmen[attr];

    var display = document.querySelector(".display");
    display.innerHTML = ""

    var output = Mustache.render(templateHTML, xman);

    display.innerHTML = output;

  })

})()
