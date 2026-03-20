import type React from "react";
import { useState } from "react";

export type ICounter = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const WithCounter = <P extends object>(
  WrappedComponent: React.ComponentType<P & ICounter>,
) => {
  const NewComponent: React.FC<P> = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);
    const reset = () => setCount(0);
    return (
      <WrappedComponent
        {...props}
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    );
  };
  return NewComponent;
};

export default WithCounter;
