(function(){
  var steakTemps = document.querySelector(".steak-temps");

  var promise =  $.ajax({
    url: "http://localhost:5008/api/steak"
  });

  promise.done(function(data){

    var html = ""

    for(var i = 0; i < data.levels.length; i++){
      var level = data.levels[i];
      
      var output = Mustache.render('<li><h1>{{name}}</h1><p>{{description}}</p><img src="{{imageUrl}}"/></li>', level);
      html = html + output;
    }
    steakTemps.innerHTML = html;

  });

})()
