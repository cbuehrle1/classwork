(function(){
  var list = document.querySelector(".character-list");

  var promise = $.ajax({
    url: "http://localhost:5003/api/dragonlance"
  })

  promise.done(function(data){

    for(var i = 0; i < data.characters.length; i++){
      var character = data.characters[i];

      var li = document.createElement("li");
      var h1 = document.createElement("h1");
      var h2 = document.createElement("h2");
      var p = document.createElement("p");

      h1.textContent = character.name
      h2.textContent = character.race
      p.textContent = character.description

      list.appendChild(li);
      li.appendChild(h1);
      li.appendChild(h2);
      li.appendChild(p);

    }
  });

})()
