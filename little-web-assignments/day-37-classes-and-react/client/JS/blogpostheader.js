(function(){

  class BlogPostHeader extends React.Component {
    render(){

      var title = "TO SAVE REAL NEWS";

      console.log(this.props);
      return <header>
        <h1>{this.props.date}</h1>
        <p>{title}</p>
      </header>
    }
  }

  window.Blog.BlogPostHeader = BlogPostHeader;

})();
