(function(){

  var promise = $.ajax({
    url: "/api/pics"
  })

  var apiPics;
  var thumbnails = document.querySelector(".thumbnail")
  var display = document.querySelector(".big-pic")

  promise.done(function(data){

    apiPics = data;

    for (var i = 0; i < data.pictures.length; i++){
      var picture = data.pictures[i];
      var img = document.createElement("img");
      img.src = picture.thumbnail
      img.classList.add("thumbnail-pic")
      img.setAttribute("data-index", i)
      thumbnails.appendChild(img)
    }

  });

  thumbnails.addEventListener("click", function(evt){

    display.innerHTML = ""
    var index = evt.target.getAttribute("data-index");
    var selectedPic = apiPics.pictures[index];
    var scriptyTemplate = document.querySelector("#template");
    var templateHtml = scriptyTemplate.innerHTML

    var output = Mustache.render(templateHtml, selectedPic);

    display.innerHTML = output;


  });





})()
