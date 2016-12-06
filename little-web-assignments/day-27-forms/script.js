(function (){
  var button = document.querySelector("button");
  var peopleList = document.querySelector(".people-list");
  var firstNameInput = document.querySelector(".first-name")
  var lastNameInput = document.querySelector(".last-name")

  button.addEventListener("click", addPerson);

  lastNameInput.addEventListener("keyup", function(evt){
    if (evt.keyCode === 13) {
      addPerson()
    }
  });

  function addPerson(){
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    var li = document.createElement("li");
    peopleList.appendChild(li);
    li.innerText = firstName + " " + lastName;

    firstNameInput.value = null;
    lastNameInput.value = null;
  };
  

})();
