var mountNode = document.querySelector('#react-root');

class Thingy extends React.Component {
  render() { return <li>
      <div className="name">{this.props.char.name}</div>
      <div className="items">{this.props.char.race}</div>
      <div className="items">{this.props.char.description}</div>
    </li>
  }
}

class AppComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {
        char: []
      }
    }
  }

  componentDidMount() {
      this.ajaxCall();
  }

  ajaxCall() {
    $.ajax({
      url: "http://localhost:5003/api/dragonlance"
    })
    .done((data) => {
      this.setState({
        data: {
          char: data.characters
        }
      });
    });
  }

  render() {

    return <div>
      <ul>
        {this.state.data.char.map((character, index) => { return <Thingy key={index} char={character} />})}
      </ul>
    </div>

  }
}

ReactDOM.render(<AppComponent />, mountNode);
