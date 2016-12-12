(function() {

  var userList = document.querySelector(".user-list")
  var promise = $.ajax({
    url: "https://api.github.com/search/users?q=spongebob"
  });

  promise.done(function(data){
    console.log("we done", data)

    for (var i = 0; i < data.items.length; i++){

      var user = data.items[i];

      var li = document.createElement("li");

      li.innerHTML = "<img src=" + user.avatar_url + "/>" + '<a href = "' + user.html_url + '">' + user.login + "</a>";
      userList.appendChild(li);

    }
  });


})();
