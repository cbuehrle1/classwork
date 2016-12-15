(function(){
  var display = document.querySelector(".display");
  var clientInput = document.querySelector(".search-input");
  var template = document.querySelector("#template");

  clientInput.addEventListener("keyup", function(evt){

    if (evt.keyCode === 13){

      var searchInput = clientInput.value;

      var promise = $.ajax({
        url: "https://api.github.com/search/repositories?q=" + searchInput
      })

      promise.done(function(data){
        
        display.innerHTML = ""

        for (var i = 0; i < data.items.length; i++){
          var item = data.items[i];
          var templateHtml = template.innerHTML;
          var output = Mustache.render(templateHtml, item);
          display.innerHTML = display.innerHTML + output;
        }


      });

    }

  });

})()
