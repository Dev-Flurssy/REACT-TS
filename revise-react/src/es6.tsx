import React from "react";

type Countno = {
  count: number;
};

class Counter extends React.Component<{}, Countno> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div>
        <h1>the current count is {this.state.count}</h1>
        <button onClick={this.increment}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
