(() => {

  var mountNode = document.querySelector('#react-root');


  class AppComponent extends React.Component {
    constructor() {
      super();

      this.state = {
        currentClass: ""
      };
    }
    toggle(param) {
      console.log(param);

      if (this.state.currentClass === "") {
        this.setState({
          currentClass: "on"
        })} else {
          this.setState({
            currentClass: ""
          })};
        }

    render() {
      var spicy = "spicy tomato";

      return <div className="pineapple">
          <p onClick={() => { console.log("hello"); }}>Greetings</p>
          {this.props.data.map((i) => { console.log(this.state); return <ul className={this.state.currentClass} onClick={() => { this.toggle(i.name); }} key={i.id}><li>{i.name}</li><li>{i.age}</li><li>{i.pencil}</li></ul>})}
      </div>;
    }
  }
  class Thingy extends React.Component {
    render() {
      return <div>More Thingy {this.props.apple}</div>;
    }
  }
  class Combine extends React.Component {

    render() {

      var data = [{
        name: "steve",
        age: 12,
        pencil: "No.2",
        id: 1
      },{
        name: "john",
        age: 45,
        pencil: "mech",
        id: 2
      },{
        name: "john",
        age: 42,
        pencil: "pen",
        id: 3
      }]

      return <div><AppComponent data={data}/><Thingy /></div>
    }
  }

  ReactDOM.render(<Combine/>, mountNode);


})();
