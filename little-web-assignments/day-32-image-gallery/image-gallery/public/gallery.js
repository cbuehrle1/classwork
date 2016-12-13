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
    console.log(evt.target)
    display.innerHTML = ""
    var index = evt.target.getAttribute("data-index");
    var selectedPic = apiPics.pictures[index]

    var displayImg = document.createElement("img");
    displayImg.src = selectedPic.fullSize
    display.appendChild(displayImg);

    var description = document.createElement("p")
    description.textContent = selectedPic.description
    display.appendChild(description);

  });





})()
