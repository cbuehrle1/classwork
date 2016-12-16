(function(){
  var display = document.querySelector(".display");
  var clientInput = document.querySelector(".search-input");
  var template = document.querySelector("#template");
  var pageCount = document.querySelector(".page-counter");
  var nextB = document.querySelector(".next-page");
  var prevB = document.querySelector(".back-page");
  var pageNav = document.querySelector(".page-nav")

  var page = 1;

  var totalCount;

  function getData (){

    var searchInput = clientInput.value + "&page=" + page;

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

      totalCount = data.total_count;
      pageCount.innerText = page;
      pageNav.style.display = "block"

    });

  }

  clientInput.addEventListener("keyup", function(evt){

    page = 1;

    if (evt.keyCode === 13){
      getData();
      prevB.classList.add("grey");
      console.log(page);
    }

  });

  nextB.addEventListener("click", function(){

    if (page < (totalCount / 30)){
      prevB.classList.remove("grey");
      page++;
      getData();
    } else if (page >= (totalCount / 30)){
      nextB.classList.add("grey")
    }

  });

  prevB.addEventListener("click", function(){

    if (page > 1){
      nextB.classList.remove("grey");
      page--;
      getData();
    }

  });

})()
