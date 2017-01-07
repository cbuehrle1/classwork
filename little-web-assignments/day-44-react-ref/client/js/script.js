var mountNode = document.querySelector('#react-root');

class AppComponent extends React.Component {

  click() {
    console.log("theInput", this.theInput.value)
  }

  render() {
    return <div><input placeholder="Input goes here" ref={(DOMelement) => { this.theInput = DOMelement; }}></input>
    <button onClick={() => {this.click(); }}>BUTTON</button>
    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
