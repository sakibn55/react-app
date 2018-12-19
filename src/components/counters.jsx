import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <React.Fragment>
        <div className="row m-1">
          <div className="col">
            <button onClick={onReset} className="btn primary btn-sm">
              Reset
            </button>
          </div>
        </div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Counters;
