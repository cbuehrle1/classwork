var mountNode = document.querySelector('#react-root');

class GithubApiSampleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      apiResult: {
        results: []
      },
      apiResulty: {
        results: []
      }
    }
  }

  clicky() {
    $.ajax({
      url: "http://swapi.co/api/planets/?page=1"
    })
    .done((data) => {
      console.log("received data!", data);

      this.setState({
        apiResult: data,
      });
    });
  }

  otherClicky() {
    $.ajax({
      url: "http://swapi.co/api/species/?page=1"
    })
    .done((data) => {
      this.setState({
        apiResulty: data
      });
    });
  }

  render() {
    return <div className="swapi">
      <h2>GITHUB!</h2>
      <button onClick={() => {this.clicky()}}>Load Data</button>
      <button onClick={() => {this.otherClicky()}}>Load Different Data</button>

      <ul>
      {this.state.apiResult.results.map((planet, index) => { return <li key={index}>{planet.name}</li>; })}
      </ul>
      <ul>
      {this.state.apiResulty.results.map((species, index) => { return <li key={index}>{species.name}</li>; })}
      </ul>
      </div>
  }
}

class FavoriteFoods extends React.Component {
  render() {
    return <li className="food-component">
        <div>{this.props.food}</div>
      </li>
  }
}

class LunchPlace extends React.Component {
  render() {
    return <li className="lunch-component">
      <div>{this.props.place.name}</div>
      <div>{this.props.place.location}</div>
      <ul>{this.props.place.foods.map((food, index) => { return <FavoriteFoods key={index} food={food}/> })}</ul>
    </li>
  }
}

class AppComponent extends React.Component {
  render() {

    var data = [{
      id: 0,
      name: "Metro Cafe",
      location: "this building",
      foods: ["ham, egg, & cheese", "chicken panini"]
    },{
      id: 1,
      name: "mudhen",
      location: "farmers market",
      foods: ["pickled pepper", "banana nut bread"]
    },{
      id: 2,
      name: "wing bucket",
      location: "down main",
      foods: ["wings", "fries"]
    }];

    return <div>
      <ul className="list">
        {data.map((place) => { return <LunchPlace key={place.id} place={place} />})}
      </ul>
      <GithubApiSampleComponent />
    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
