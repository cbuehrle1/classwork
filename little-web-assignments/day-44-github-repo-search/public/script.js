"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var ListItem = function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        { className: "indiv-item" },
        React.createElement(
          "div",
          { className: "repo-title" },
          React.createElement(
            "a",
            { href: this.props.repo.html_url },
            this.props.repo.name
          )
        ),
        React.createElement(
          "div",
          null,
          "by ",
          React.createElement(
            "a",
            { href: this.props.repo.owner.html_url },
            this.props.repo.owner.login
          )
        )
      );
    }
  }]);

  return ListItem;
}(React.Component);

var BaseComponent = function (_React$Component2) {
  _inherits(BaseComponent, _React$Component2);

  function BaseComponent() {
    _classCallCheck(this, BaseComponent);

    var _this2 = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this));

    _this2.state = { data: { items: [], total_count: 0 }, page: 1, show: "", greyPrev: "", greyNext: "" };
    return _this2;
  }

  _createClass(BaseComponent, [{
    key: "pressedEnter",
    value: function pressedEnter(evt, page) {
      if (evt.keyCode === 13) {
        console.log(this.state.page);
        this.getData(evt.target.value + "&page=" + this.state.page, this.state.page);
      }
    }
  }, {
    key: "nextPage",
    value: function nextPage() {

      if (this.state.page === 1) {
        this.getData(this.theInput.value + "&page=" + (this.state.page + 1), this.state.page + 1);
      } else if (this.state.page < this.state.data.total_count / 30) {
        this.getData(this.theInput.value + "&page=" + this.state.page, this.state.page + 1);
      }
    }
  }, {
    key: "prevPage",
    value: function prevPage() {

      if (this.state.page > 1) {
        this.getData(this.theInput.value + "&page=" + this.state.page, this.state.page - 1);
      }
    }
  }, {
    key: "getData",
    value: function getData(query, page) {
      var _this3 = this;

      $.ajax({
        url: "https://api.github.com/search/repositories?q=" + query
      }).done(function (data) {

        if (page === 1) {
          _this3.setState({ data: {
              items: data.items, total_count: data.total_count },
            page: page,
            show: "show",
            greyPrev: "grey",
            greyNext: "" });
        } else if (page < data.total_count / 30) {
          _this3.setState({ data: {
              items: data.items, total_count: data.total_count },
            page: page,
            show: "show",
            greyPrev: "",
            greyNext: "" });
        } else if (page >= data.total_count / 30) {
          _this3.setState({ data: {
              items: data.items, total_count: data.total_count },
            page: page,
            show: "show",
            greyPrev: "",
            greyNext: "grey" });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var display;

      if (this.state != null) {
        display = React.createElement(
          "ul",
          null,
          this.state.data.items.map(function (item, index) {
            return React.createElement(ListItem, { className: "list-item", key: index, repo: item });
          })
        );
      }

      return React.createElement(
        "div",
        { className: "container" },
        React.createElement("input", { placeholder: "Search", ref: function ref(input) {
            _this4.theInput = input;
          }, onKeyUp: function onKeyUp(evt) {
            _this4.pressedEnter(evt);
          } }),
        React.createElement(
          "div",
          { className: "button-div" },
          React.createElement(
            "button",
            { className: this.state.show + " " + this.state.greyNext, onClick: function onClick() {
                _this4.nextPage();
              } },
            "Next"
          ),
          React.createElement(
            "span",
            { className: this.state.show },
            this.state.page
          ),
          React.createElement(
            "button",
            { className: this.state.show + " " + this.state.greyPrev, onClick: function onClick() {
                _this4.prevPage();
              } },
            "Previous"
          )
        ),
        display
      );
    }
  }]);

  return BaseComponent;
}(React.Component);

ReactDOM.render(React.createElement(BaseComponent, null), mountNode);
//# sourceMappingURL=script.js.map
