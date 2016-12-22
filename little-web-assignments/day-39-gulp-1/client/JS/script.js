(() => {

  var mountNode = document.querySelector('.container');

class HelloMessage extends React.Component {
  render() {
    return <div>Hello Bob, I met a man who was {this.props.guy}!</div>;
  }
}

class Thing extends React.Component {

  render() {
    return <div className="bernard">{this.props.guy}</div>;
  }
}

class Combined extends React.Component {
  render(){
    var jimmies = "rustlin jimmies"
    return <div>
          <HelloMessage guy={jimmies}/>
          <Thing guy={jimmies}/>
          </div>

  }
}

ReactDOM.render(<Combined />, mountNode);

})()
