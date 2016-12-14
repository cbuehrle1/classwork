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

  mutantList.addEventListener("click", function(evt) {
    console.log(evt.target);
    var attr = evt.target.getAttribute("data-index");

    var currentlySelected = document.querySelector(".selected")
    if (currentlySelected != null){
      currentlySelected.classList.remove("selected");
    }
    evt.target.classList.add("selected");

    var xman = apiData.xmen[attr];

    var display = document.querySelector(".display");
    display.innerHTML = ""

    var h2 = document.createElement("h2");
    h2.textContent = xman.realName
    display.appendChild(h2);

    var img = document.createElement("img");
    img.src = xman.imageUrl
    display.appendChild(img)

    var description = document.createElement("p");
    description.textContent = xman.description
    display.appendChild(description)

    var powers = document.createElement("ul");
    powers.textContent = "Powers:";
    powers.classList.add("power-list");

    for (var c = 0; c < apiData.xmen[attr].powers.length; c++){
      var theMoves = apiData.xmen[attr].powers[c]
      var power = document.createElement("li");
      power.textContent = theMoves;
      powers.appendChild(power);
    }

    display.appendChild(powers);
  })
  
})()
