"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.SW = window.SW || {};

(function () {
  var PlanetDetails = function (_React$Component) {
    _inherits(PlanetDetails, _React$Component);

    function PlanetDetails() {
      _classCallCheck(this, PlanetDetails);

      var _this = _possibleConstructorReturn(this, (PlanetDetails.__proto__ || Object.getPrototypeOf(PlanetDetails)).call(this));

      _this.state = {
        selected: false
      };
      return _this;
    }

    _createClass(PlanetDetails, [{
      key: "clicky",
      value: function clicky() {

        if (this.state.selected === false) {
          this.setState({
            selected: true
          });
        } else {
          this.setState({
            selected: false
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var theDetails;

        if (this.state.selected != false) {
          theDetails = React.createElement(
            "ul",
            { className: "details" },
            React.createElement(
              "li",
              null,
              this.props.planet.diameter
            ),
            React.createElement(
              "li",
              null,
              this.props.planet.climate
            )
          );
        }

        return React.createElement(
          "li",
          { onClick: function onClick() {
              _this2.clicky();
            } },
          React.createElement(
            "div",
            { className: "planet" },
            this.props.planet.name
          ),
          theDetails
        );
      }
    }]);

    return PlanetDetails;
  }(React.Component);

  var PlanetList = function (_React$Component2) {
    _inherits(PlanetList, _React$Component2);

    function PlanetList() {
      _classCallCheck(this, PlanetList);

      return _possibleConstructorReturn(this, (PlanetList.__proto__ || Object.getPrototypeOf(PlanetList)).call(this));
    }

    _createClass(PlanetList, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.load();
      }
    }, {
      key: "load",
      value: function load() {
        var _this4 = this;

        $.ajax({
          url: "http://swapi.co/api/planets/"
        }).done(function (data) {
          _this4.setState({
            apiResult: data
          });
        });
      }
    }, {
      key: "render",
      value: function render() {

        var theList;

        if (this.state != null) {
          theList = React.createElement(
            "ul",
            null,
            this.state.apiResult.results.map(function (planet, index) {
              return React.createElement(PlanetDetails, { key: index, planet: planet });
            })
          );
        }
        return React.createElement(
          "div",
          { className: "planet-list" },
          React.createElement(
            "h1",
            null,
            "Planet List"
          ),
          theList
        );
      }
    }]);

    return PlanetList;
  }(React.Component);

  SW.PlanetList = PlanetList;
})();
//# sourceMappingURL=planetlist.js.map
