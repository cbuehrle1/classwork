window.SW = window.SW || {};

(() => {

  var mountNode = document.querySelector('#react-root');


  class AppComponent extends React.Component {
    render() {
      return <div><SW.PlanetList /></div>;
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);

})()
