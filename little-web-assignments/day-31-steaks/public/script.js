(function(){
  var steakTemps = document.querySelector(".steak-temps");

  var promise =  $.ajax({
    url: "http://localhost:5008/api/steak"
  });

  promise.done(function(data){

    for(var i = 0; i < data.levels.length; i++){
      var level = data.levels[i];
      var li = document.createElement("li");
      var h1 = document.createElement("h1");
      var p = document.createElement("p");
      var img = document.createElement("img");

      h1.textContent = level.name
      p.textContent = level.description
      img.src = level.imageUrl

      steakTemps.appendChild(li);
      li.appendChild(h1);
      li.appendChild(p);
      li.appendChild(img);

    }
    
  });

})()
