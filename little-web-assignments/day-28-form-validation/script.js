console.log('script file hooked up!');

var submitB = document.querySelector(".submit-button");

var firstNameInput = document.querySelector(".first-name input");

var lastNameInput = document.querySelector(".last-name input");

var bioInput = document.querySelector(".bio textarea");


submitB.addEventListener("click", function(evt){

  if (firstNameInput.value === ""){
    addClass(evt, firstNameInput);
  } else {
    removeClass(firstNameInput);
  }

  if (lastNameInput.value === ""){
    addClass(evt, lastNameInput);
  } else {
    removeClass(lastNameInput);
  }

  if (bioInput.value.length < 20){
    addClass(evt, bioInput);
  } else {
    removeClass(bioInput);
  }

});

function addClass(evt, domElement){
  evt.preventDefault();
  domElement.classList.add("empty-input");
};

function removeClass(domElement){
  domElement.classList.remove("empty-input");
};

var link = document.querySelector("a");

console.log(link);

link.addEventListener("click", function(evt){

  evt.preventDefault();
});
