(function(){
  class PostBody extends React.Component {
    render(){
      return <div className="post-body">
        <img src={this.props.src}/>
        <p>Things are things</p>
        <p>More things are other things</p>
      </div>

    }
  }
window.Blog.PostBody = PostBody;
})()
