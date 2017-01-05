var mountNode = document.querySelector('#react-root');


class AppComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {
        char: []
      }
    }
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

    this.ajaxCall();

    return <div>
      <ul>
        {this.state.data.char.map((character, index) => { return <li key={index}>
          <div className="name">{character.name}</div>
          <div className="items">{character.race}</div>
          <div className="items">{character.description}</div>
        </li>})}
      </ul>
    </div>

  }
}

ReactDOM.render(<AppComponent />, mountNode);
