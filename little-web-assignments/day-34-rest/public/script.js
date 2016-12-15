(function(){

function getData(){ $.ajax({
    url: "/api/data"
  })
  .done(function(data){
    var wordList = document.querySelector(".word-list");
    wordList.innerHTML = "";
    for(var i = 0; i < data.length; i++){
      var li = document.createElement("li");
      li.textContent = data[i];
      wordList.appendChild(li);
    }
  });
}

getData();

  var wordInput = document.querySelector(".word-input");
  wordInput.addEventListener("keyup", function(evt){
    console.log(evt.keyCode);

    if (evt.keyCode === 13){
      $.ajax({
        url: "/api/data",
        method: "POST",
        data: { word: wordInput.value }
      })
      .done(function(data) {
        console.log("thepostisdone")
        getData();
      });
    }
  });
})();
