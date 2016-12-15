(function(){
  var list = document.querySelector(".character-list");

  var promise = $.ajax({
    url: "http://localhost:5003/api/dragonlance"
  })

  promise.done(function(data){

    html = ""

    for(var i = 0; i < data.characters.length; i++){
      var character = data.characters[i];

      var output = Mustache.render("<li><h1>{{name}}</h1><h2>{{race}}</h2><p>{{description}}</p></li>", character);
      html += output;

    }

    list.innerHTML = html;
  });

})()
