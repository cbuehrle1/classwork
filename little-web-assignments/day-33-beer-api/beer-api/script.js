console.log('script file hooked up!');

function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = btoa(tok);
  return "Basic " + hash;
}

var promise = $.ajax({
  url: 'https://punkapi.com/api/v1/beers',
  beforeSend: function (xhr){
        xhr.setRequestHeader('Authorization', make_base_auth("67407d21d3264e49a5301522c743204d", ""));
    },

})

var html = ""

promise.done(function(data){

  var beerStuffList = document.querySelector(".beer-stuff");
  var templateScript = document.querySelector(".beer-template")
  var templateHtml = templateScript.innerHTML;
  var html = "";

  for (var i = 0; i < data.length; i++){
    var beer = data[i];
    var output = Mustache.render(templateHtml, beer);
    html = html + output;
  }
  console.log(html)
  beerStuffList.innerHTML = html;
});
