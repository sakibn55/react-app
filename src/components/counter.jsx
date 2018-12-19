import React, { Component } from "react";

class Counter extends Component {
  state = {
    imageUrl: "https://picsum.photos/400/200"
  };

  style = {
    fontSize: 10,
    fontWeight: "bold"
  };

  // renderTags(){
  //     if(this.state.tags.length === 0 ) return <p>There are no tags</p>;
  //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  // }

  // handleIncrement = () =>{
  //     this.setState({ value: this.state.value + 1});
  // }

  render() {
    return (
      <div className="row m-1">
        {this.props.children}
        <div className="col-4">
          <img className="img-fluid" src={this.state.imageUrl} alt="" />
        </div>
        <div className="col-8">
          <span style={this.style} className={this.getBandgeClass()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            Decrement
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            DELETE
          </button>
        </div>
        {/* <div>{this.renderTags()}</div> */}
      </div>
    );
  }
  getBandgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
