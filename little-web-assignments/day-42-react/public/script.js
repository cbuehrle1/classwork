"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var GithubApiSampleComponent = function (_React$Component) {
  _inherits(GithubApiSampleComponent, _React$Component);

  function GithubApiSampleComponent() {
    _classCallCheck(this, GithubApiSampleComponent);

    var _this = _possibleConstructorReturn(this, (GithubApiSampleComponent.__proto__ || Object.getPrototypeOf(GithubApiSampleComponent)).call(this));

    _this.state = {
      apiResult: {
        results: []
      },
      apiResulty: {
        results: []
      }
    };
    return _this;
  }

  _createClass(GithubApiSampleComponent, [{
    key: "clicky",
    value: function clicky() {
      var _this2 = this;

      $.ajax({
        url: "http://swapi.co/api/planets/?page=1"
      }).done(function (data) {
        console.log("received data!", data);

        _this2.setState({
          apiResult: data
        });
      });
    }
  }, {
    key: "otherClicky",
    value: function otherClicky() {
      var _this3 = this;

      $.ajax({
        url: "http://swapi.co/api/species/?page=1"
      }).done(function (data) {
        _this3.setState({
          apiResulty: data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "div",
        { className: "swapi" },
        React.createElement(
          "h2",
          null,
          "GITHUB!"
        ),
        React.createElement(
          "button",
          { onClick: function onClick() {
              _this4.clicky();
            } },
          "Load Data"
        ),
        React.createElement(
          "button",
          { onClick: function onClick() {
              _this4.otherClicky();
            } },
          "Load Different Data"
        ),
        React.createElement(
          "ul",
          null,
          this.state.apiResult.results.map(function (planet, index) {
            return React.createElement(
              "li",
              { key: index },
              planet.name
            );
          })
        ),
        React.createElement(
          "ul",
          null,
          this.state.apiResulty.results.map(function (species, index) {
            return React.createElement(
              "li",
              { key: index },
              species.name
            );
          })
        )
      );
    }
  }]);

  return GithubApiSampleComponent;
}(React.Component);

var FavoriteFoods = function (_React$Component2) {
  _inherits(FavoriteFoods, _React$Component2);

  function FavoriteFoods() {
    _classCallCheck(this, FavoriteFoods);

    return _possibleConstructorReturn(this, (FavoriteFoods.__proto__ || Object.getPrototypeOf(FavoriteFoods)).apply(this, arguments));
  }

  _createClass(FavoriteFoods, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        { className: "food-component" },
        React.createElement(
          "div",
          null,
          this.props.food
        )
      );
    }
  }]);

  return FavoriteFoods;
}(React.Component);

var LunchPlace = function (_React$Component3) {
  _inherits(LunchPlace, _React$Component3);

  function LunchPlace() {
    _classCallCheck(this, LunchPlace);

    return _possibleConstructorReturn(this, (LunchPlace.__proto__ || Object.getPrototypeOf(LunchPlace)).apply(this, arguments));
  }

  _createClass(LunchPlace, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        { className: "lunch-component" },
        React.createElement(
          "div",
          null,
          this.props.place.name
        ),
        React.createElement(
          "div",
          null,
          this.props.place.location
        ),
        React.createElement(
          "ul",
          null,
          this.props.place.foods.map(function (food, index) {
            return React.createElement(FavoriteFoods, { key: index, food: food });
          })
        )
      );
    }
  }]);

  return LunchPlace;
}(React.Component);

var AppComponent = function (_React$Component4) {
  _inherits(AppComponent, _React$Component4);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
  }

  _createClass(AppComponent, [{
    key: "render",
    value: function render() {

      var data = [{
        id: 0,
        name: "Metro Cafe",
        location: "this building",
        foods: ["ham, egg, & cheese", "chicken panini"]
      }, {
        id: 1,
        name: "mudhen",
        location: "farmers market",
        foods: ["pickled pepper", "banana nut bread"]
      }, {
        id: 2,
        name: "wing bucket",
        location: "down main",
        foods: ["wings", "fries"]
      }];

      return React.createElement(
        "div",
        null,
        React.createElement(
          "ul",
          { className: "list" },
          data.map(function (place) {
            return React.createElement(LunchPlace, { key: place.id, place: place });
          })
        ),
        React.createElement(GithubApiSampleComponent, null)
      );
    }
  }]);

  return AppComponent;
}(React.Component);

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
