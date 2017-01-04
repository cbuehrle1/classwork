(function(){

  var peopleList = document.querySelector(".people-list");

  var people = ["stanley", "michael", "pam", "ryan"]

  people.forEach(function(name){
    var li = document.createElement("li");
    li.textContent = name;

    peopleList.appendChild(li);

  });

  peopleList.addEventListener("click", (evt) => {
    console.log("you hit that", evt.target);
  });
})()
