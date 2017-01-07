var mountNode = document.querySelector('#react-root');

class ListItem extends React.Component {
  render() {
    return <li><div>{this.props.repo.name}</div>
      <div>by {this.props.repo.owner.login}</div>
      </li>;
  }
}

class BaseComponent extends React.Component {

  constructor() {
    super();
    this.state = { data:
      { items: [], total_count: 0 }, page: 1 }
  }

  pressedEnter(evt, page) {
    if (evt.keyCode === 13) {
      console.log(this.state.page);
      this.getData(evt.target.value + "&page=" + this.state.page, this.state.page);
    }
  }

  nextPage() {

    if (this.state.page === 1) {
      this.getData(this.theInput.value + "&page=" + (this.state.page + 1), this.state.page + 1);
      } else if (this.state.page < this.state.data.total_count / 30) {
        this.getData(this.theInput.value + "&page=" + this.state.page, this.state.page + 1);
      }

  }

  prevPage() {

    if (this.state.page > 1) {
      this.getData(this.theInput.value + "&page=" + (this.state.page), this.state.page - 1);
    }

  }

  getData(query, page) {
    $.ajax({
      url: "https://api.github.com/search/repositories?q=" + query
    })
    .done((data) => {
        console.log(page);
        this.setState({ data: {
          items: data.items, total_count: data.total_count },
          page: page
        });
    });
  }

  render() {

    var display;

    if (this.state != null) {
      display = <ul>
      {this.state.data.items.map((item, index) => { return <ListItem className="list-item" key={index} repo={item} />})}
      </ul>
    }

    return <div><input placeholder="Search" ref={(input) => { this.theInput = input; }} onKeyUp={(evt) => { this.pressedEnter(evt); }}/>
      <button onClick={() => { this.nextPage() }}>Next</button>
      <div className="page-number">{this.state.page}</div>
      <button onClick={() => { this.prevPage() }}>Previous</button>
      {display}
    </div>;
  }
}

ReactDOM.render(<BaseComponent />, mountNode);
