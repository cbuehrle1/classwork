var pageNumber = 1;
function doingIt() {

$.ajax({
  url: "https://api.github.com/search/repositories?q=animal&page=" + pageNumber
})
.done(function(data) {
  console.log("data?", data, pageNumber);
  putStuffHere.innerHTML = ""
  data.items.forEach(function(item) {
    var li = document.createElement("li");
    li.textContent = item.owner.login;
    putStuffHere.appendChild(li);
  });

});

}

var putStuffHere = document.querySelector("#putstuffhere");
var nextButton = document.querySelector("#next");

doingIt();

nextButton.addEventListener("click", function() {
  pageNumber++;
  doingIt();
})
