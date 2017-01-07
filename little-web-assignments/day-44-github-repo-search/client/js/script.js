var mountNode = document.querySelector('#react-root');

class ListItem extends React.Component {
  render() {
    return <li className="indiv-item"><div className="repo-title"><a href={this.props.repo.html_url}>{this.props.repo.name}</a></div>
      <div>by <a href={this.props.repo.owner.html_url}>{this.props.repo.owner.login}</a></div>
      </li>;
  }
}

class BaseComponent extends React.Component {

  constructor() {
    super();
    this.state = { data:
      { items: [], total_count: 0 }, page: 1, show: "", greyPrev: "", greyNext: "" }
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

        if (page === 1){
          this.setState({ data: {
            items: data.items, total_count: data.total_count },
            page: page,
            show: "show",
            greyPrev: "grey",
            greyNext: "" })
          } else if (page < data.total_count / 30) {
          this.setState({ data: {
            items: data.items, total_count: data.total_count },
            page: page,
            show: "show",
            greyPrev: "",
            greyNext: "" })
        } else if (page >= data.total_count / 30) {
          this.setState({ data: {
            items: data.items, total_count: data.total_count },
            page: page,
            show: "show",
            greyPrev: "",
            greyNext: "grey" })
        }

    });
  }

  render() {

    var display;

    if (this.state != null) {
      display = <ul>
      {this.state.data.items.map((item, index) => { return <ListItem className="list-item" key={index} repo={item} />})}
      </ul>
    }

    return <div className="container"><input placeholder="Search" ref={(input) => { this.theInput = input; }} onKeyUp={(evt) => { this.pressedEnter(evt); }}/>
      <div className="button-div">
        <button className={this.state.show + " " + this.state.greyNext} onClick={() => { this.nextPage() }}>Next</button>
        <span className={this.state.show}>{this.state.page}</span>
        <button className={this.state.show + " " + this.state.greyPrev} onClick={() => { this.prevPage() }}>Previous</button>
      </div>
      {display}
    </div>;
  }
}

ReactDOM.render(<BaseComponent />, mountNode);
