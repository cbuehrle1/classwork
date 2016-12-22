"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

  var mountNode = document.querySelector('.container');

  var HelloMessage = function (_React$Component) {
    _inherits(HelloMessage, _React$Component);

    function HelloMessage() {
      _classCallCheck(this, HelloMessage);

      return _possibleConstructorReturn(this, (HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).apply(this, arguments));
    }

    _createClass(HelloMessage, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          "Hello Bob, I met a man who was ",
          this.props.guy,
          "!"
        );
      }
    }]);

    return HelloMessage;
  }(React.Component);

  var Thing = function (_React$Component2) {
    _inherits(Thing, _React$Component2);

    function Thing() {
      _classCallCheck(this, Thing);

      return _possibleConstructorReturn(this, (Thing.__proto__ || Object.getPrototypeOf(Thing)).apply(this, arguments));
    }

    _createClass(Thing, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "bernard" },
          this.props.guy
        );
      }
    }]);

    return Thing;
  }(React.Component);

  var Combined = function (_React$Component3) {
    _inherits(Combined, _React$Component3);

    function Combined() {
      _classCallCheck(this, Combined);

      return _possibleConstructorReturn(this, (Combined.__proto__ || Object.getPrototypeOf(Combined)).apply(this, arguments));
    }

    _createClass(Combined, [{
      key: "render",
      value: function render() {
        var jimmies = "rustlin jimmies";
        return React.createElement(
          "div",
          null,
          React.createElement(HelloMessage, { guy: jimmies }),
          React.createElement(Thing, { guy: jimmies })
        );
      }
    }]);

    return Combined;
  }(React.Component);

  ReactDOM.render(React.createElement(Combined, null), mountNode);
})();
//# sourceMappingURL=script.js.map
