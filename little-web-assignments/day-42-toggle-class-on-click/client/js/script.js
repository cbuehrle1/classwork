var mountNode = document.querySelector('#react-root');

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = { toggle: "divy" }
  }
  toggleMe() {

    if (this.state.toggle === "divy") {
      this.setState({
        toggle: "divy on"
      });
    } else {
      this.setState({
        toggle: "divy"
      });
    }

  }
  render() {
    return <div className={this.state.toggle} onClick={() => {this.toggleMe()}}>Click Me!</div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
