(function(){
  var ul = document.querySelector("ul");

  var promise = $.ajax({
    url: "http://localhost:5001/api/class"
  });

  promise.done(function(data){

    var li = document.createElement("li");
    li.textContent = data.name
    ul.appendChild(li);
    var liTwo = document.createElement("li");
    liTwo.textContent = data.cohort
    ul.appendChild(liTwo);

    for (var i = 0; i < data.students.length; i++){

      var liThree = document.createElement("li");
      liThree.classList.add("same-line");
      liThree.textContent = data.students[i];
      ul.appendChild(liThree);

    }

  });


})()
