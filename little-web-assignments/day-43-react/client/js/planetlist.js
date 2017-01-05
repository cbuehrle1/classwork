window.SW = window.SW || {};

(() => {

  class PlanetDetails extends React.Component {

    constructor() {
      super();
      this.state = {
        selected: false
      }
    }

    clicky() {
      this.setState({
        selected: !this.state.selected
      });
    }

    render() {

      var theDetails;

      if (this.state.selected != false) {
        theDetails =
        <ul className="details">
          <li>Diameter: {this.props.planet.diameter}</li>
          <li>Climate: {this.props.planet.climate}</li>
          <li>Terrain: {this.props.planet.terrain}</li>
          <li>Population: {this.props.planet.population}</li>
        </ul>
      }

      return <li onClick={() => { this.clicky() }}>
        <div className="planet">{this.props.planet.name}</div>
        {theDetails}
        </li>
      }

    }


  class PlanetList extends React.Component {

    componentDidMount() {
      this.load();
    }

    load() {
      $.ajax({
        url: "http://swapi.co/api/planets/"
      })
      .done((data) => {
        this.setState({
          apiResult: data
        });
      });
    }

    render() {

      var theList;

      if (this.state != null) {
        theList = <ul>
          {this.state.apiResult.results.map((planet, index) => {
            return <PlanetDetails key={index} planet={planet} />
          })}
          </ul>
    }
      return <div className="planet-list">
        <h1>Planet List</h1>
        {theList}
      </div>
  }
}
  SW.PlanetList = PlanetList;

})()
