"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

  var mountNode = document.querySelector('#react-root');

  var AppComponent = function (_React$Component) {
    _inherits(AppComponent, _React$Component);

    function AppComponent() {
      _classCallCheck(this, AppComponent);

      var _this = _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).call(this));

      _this.state = {
        currentClass: ""
      };
      return _this;
    }

    _createClass(AppComponent, [{
      key: "toggle",
      value: function toggle(param) {
        console.log(param);

        if (this.state.currentClass === "") {
          this.setState({
            currentClass: "on"
          });
        } else {
          this.setState({
            currentClass: ""
          });
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var spicy = "spicy tomato";

        return React.createElement(
          "div",
          { className: "pineapple" },
          React.createElement(
            "p",
            { onClick: function onClick() {
                console.log("hello");
              } },
            "Greetings"
          ),
          this.props.data.map(function (i) {
            console.log(_this2.state);return React.createElement(
              "ul",
              { className: _this2.state.currentClass, onClick: function onClick() {
                  _this2.toggle(i.name);
                }, key: i.id },
              React.createElement(
                "li",
                null,
                i.name
              ),
              React.createElement(
                "li",
                null,
                i.age
              ),
              React.createElement(
                "li",
                null,
                i.pencil
              )
            );
          })
        );
      }
    }]);

    return AppComponent;
  }(React.Component);

  var Thingy = function (_React$Component2) {
    _inherits(Thingy, _React$Component2);

    function Thingy() {
      _classCallCheck(this, Thingy);

      return _possibleConstructorReturn(this, (Thingy.__proto__ || Object.getPrototypeOf(Thingy)).apply(this, arguments));
    }

    _createClass(Thingy, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          "More Thingy ",
          this.props.apple
        );
      }
    }]);

    return Thingy;
  }(React.Component);

  var Combine = function (_React$Component3) {
    _inherits(Combine, _React$Component3);

    function Combine() {
      _classCallCheck(this, Combine);

      return _possibleConstructorReturn(this, (Combine.__proto__ || Object.getPrototypeOf(Combine)).apply(this, arguments));
    }

    _createClass(Combine, [{
      key: "render",
      value: function render() {

        var data = [{
          name: "steve",
          age: 12,
          pencil: "No.2",
          id: 1
        }, {
          name: "john",
          age: 45,
          pencil: "mech",
          id: 2
        }, {
          name: "john",
          age: 42,
          pencil: "pen",
          id: 3
        }];

        return React.createElement(
          "div",
          null,
          React.createElement(AppComponent, { data: data }),
          React.createElement(Thingy, null)
        );
      }
    }]);

    return Combine;
  }(React.Component);

  ReactDOM.render(React.createElement(Combine, null), mountNode);
})();
//# sourceMappingURL=script.js.map
