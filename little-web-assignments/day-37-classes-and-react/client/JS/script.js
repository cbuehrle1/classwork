(() => {

  class Person {

    sayName() {
      console.log("My name is", this.firstName);
    }
    whereDoYouLive(){
      console.log("I live at", this.address);
    }

  }

  var bob = new Person();
  bob.firstName = "Bob";
  bob.lastName = "Smith";

  console.log("bob", bob);
  bob.sayName();

  var steve = new Person();
  steve.firstName = "Steve"
  steve.lastName = "Stevenson"
  steve.address = "324 Dogwood Trail"

  steve.sayName();
  steve.whereDoYouLive();

  // var toggleB = document.querySelector(".toggle-me");
  //
  // toggleB.addEventListener("click", function(){
  //   toggleB.classList.toggle("toggled");
  // });

  class CustomView {

    constructor(selector){
      console.log("custom view constructor", selector);
      this.selector = selector;
      this.element = document.querySelector(selector);
    }

    setupToggling(className){
      this.element.addEventListener("click", function(evt){
      evt.target.classList.toggle(className);
      });
    }
  }

  var firstToggler = new CustomView(".toggle-me");

  firstToggler.setupToggling("toggled");


})()
