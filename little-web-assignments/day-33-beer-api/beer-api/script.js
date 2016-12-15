console.log('script file hooked up!');

function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = btoa(tok);
  return "Basic " + hash;
}
var page = 1;
var upButton = document.querySelector(".up-button");
var downButton = document.querySelector(".down-button");

upButton.addEventListener("click", function(){

  if (page < 10){
  page++;
  thePage();
  }
})

downButton. addEventListener("click", function(){

  if (page != 1){
    page--;
    thePage();
  }

})

function thePage() {
var promise = $.ajax({
  url: 'https://punkapi.com/api/v1/beers?page=' + page,
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

}

thePage();
