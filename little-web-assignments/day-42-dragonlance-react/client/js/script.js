var mountNode = document.querySelector('#react-root');

class SmallComponent extends React.Component {
  
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
        {this.state.data.char.map((character, index) => { return <li key={index}>{character.name}</li>})}
      </ul>
    </div>

  }
}

ReactDOM.render(<AppComponent />, mountNode);
