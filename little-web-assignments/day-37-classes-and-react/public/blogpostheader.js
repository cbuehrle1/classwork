"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  var BlogPostHeader = function (_React$Component) {
    _inherits(BlogPostHeader, _React$Component);

    function BlogPostHeader() {
      _classCallCheck(this, BlogPostHeader);

      return _possibleConstructorReturn(this, (BlogPostHeader.__proto__ || Object.getPrototypeOf(BlogPostHeader)).apply(this, arguments));
    }

    _createClass(BlogPostHeader, [{
      key: "render",
      value: function render() {

        var title = "TO SAVE REAL NEWS";

        console.log(this.props);
        return React.createElement(
          "header",
          null,
          React.createElement(
            "h1",
            null,
            this.props.date
          ),
          React.createElement(
            "p",
            null,
            title
          )
        );
      }
    }]);

    return BlogPostHeader;
  }(React.Component);

  window.Blog.BlogPostHeader = BlogPostHeader;
})();
//# sourceMappingURL=blogpostheader.js.map