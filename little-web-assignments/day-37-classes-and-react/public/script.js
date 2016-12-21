"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var Person = function () {
    function Person() {
      _classCallCheck(this, Person);
    }

    _createClass(Person, [{
      key: "sayName",
      value: function sayName() {
        console.log("My name is", this.firstName);
      }
    }, {
      key: "whereDoYouLive",
      value: function whereDoYouLive() {
        console.log("I live at", this.address);
      }
    }]);

    return Person;
  }();

  var bob = new Person();
  bob.firstName = "Bob";
  bob.lastName = "Smith";

  console.log("bob", bob);
  bob.sayName();

  var steve = new Person();
  steve.firstName = "Steve";
  steve.lastName = "Stevenson";
  steve.address = "324 Dogwood Trail";

  steve.sayName();
  steve.whereDoYouLive();

  // var toggleB = document.querySelector(".toggle-me");
  //
  // toggleB.addEventListener("click", function(){
  //   toggleB.classList.toggle("toggled");
  // });

  var CustomView = function () {
    function CustomView(selector) {
      _classCallCheck(this, CustomView);

      console.log("custom view constructor", selector);
      this.selector = selector;
      this.element = document.querySelector(selector);
    }

    _createClass(CustomView, [{
      key: "setupToggling",
      value: function setupToggling(className) {
        this.element.addEventListener("click", function (evt) {
          evt.target.classList.toggle(className);
        });
      }
    }]);

    return CustomView;
  }();

  var firstToggler = new CustomView(".toggle-me");

  firstToggler.setupToggling("toggled");
})();
//# sourceMappingURL=script.js.map