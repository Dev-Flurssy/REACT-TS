import React from "react";
import type { ICounter } from "./WithCounter";
import "./Counter.css";

const Counter: React.FC<ICounter> = ({
  count,
  increment,
  decrement,
  reset,
}) => {
  return (
    <div className="container">
      <h2 className="title">Counter App</h2>
      <div className="count">{count}</div>
      <div className="buttons">
        <button onClick={increment} className="btn">
          +
        </button>
        <button onClick={decrement} className="btn">
          -
        </button>
        <button onClick={reset} className="btn reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
