(() => {
  console.log("hello");

  var mountNode = document.querySelector('.first-react');

  var BlogPostHeader = window.Blog.BlogPostHeader;

  var PostBody = window.Blog.PostBody;

  var Related = window.Blog.Related;

  class BlogPost extends React.Component {
    render(){

      var blah = "BLAH BLAB BLAB"
      var imgSrc = "http://www.zeldman.com/wp-content/themes/zeldman/images/default.svg"
      return <div className="blog-post">

              <BlogPostHeader date={blah}/>

              <PostBody src={imgSrc}/>

              <Related/>

            </div>
    }
  }

  ReactDOM.render(<BlogPost/>, mountNode);
})()
