"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var Thingy = function (_React$Component) {
  _inherits(Thingy, _React$Component);

  function Thingy() {
    _classCallCheck(this, Thingy);

    return _possibleConstructorReturn(this, (Thingy.__proto__ || Object.getPrototypeOf(Thingy)).apply(this, arguments));
  }

  _createClass(Thingy, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        null,
        React.createElement(
          "div",
          { className: "name" },
          this.props.char.name
        ),
        React.createElement(
          "div",
          { className: "items" },
          this.props.char.race
        ),
        React.createElement(
          "div",
          { className: "items" },
          this.props.char.description
        )
      );
    }
  }]);

  return Thingy;
}(React.Component);

var AppComponent = function (_React$Component2) {
  _inherits(AppComponent, _React$Component2);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    var _this2 = _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).call(this));

    _this2.state = {
      data: {
        char: []
      }
    };
    return _this2;
  }

  _createClass(AppComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ajaxCall();
    }
  }, {
    key: "ajaxCall",
    value: function ajaxCall() {
      var _this3 = this;

      $.ajax({
        url: "http://localhost:5003/api/dragonlance"
      }).done(function (data) {
        _this3.setState({
          data: {
            char: data.characters
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        null,
        React.createElement(
          "ul",
          null,
          this.state.data.char.map(function (character, index) {
            return React.createElement(Thingy, { key: index, char: character });
          })
        )
      );
    }
  }]);

  return AppComponent;
}(React.Component);

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
