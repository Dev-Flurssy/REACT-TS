import { useReducer, useState } from "react";
interface IAction {
  type: "Increment" | "Decrement" | "Multiply" | "Divide" | "Modulo" | "Reset";
  payload?: number;
}
interface IState {
  count: number;
}
const calculator = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + (action.payload ?? 1) };
    case "Decrement":
      return { count: state.count - (action.payload ?? 1) };
    case "Multiply":
      return { count: state.count * (action.payload ?? 1) };
    case "Divide":
      return { count: state.count / (action.payload ?? 1) };
    case "Modulo":
      return { count: state.count % (action.payload ?? 1) };
    case "Reset":
      return { count: 0 };
    default:
      return state;
  }
};

const Practice = () => {
  const [state, dispatch] = useReducer(calculator, { count: 0 });
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>{state.count}</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
        placeholder="Enter Number"
      />
      <button
        onClick={() =>
          dispatch({ type: "Increment", payload: num !== 0 ? num : undefined })
        }
      >
        Increase
      </button>
      <button
        onClick={() =>
          dispatch({ type: "Decrement", payload: num !== 0 ? num : undefined })
        }
      >
        Decrease
      </button>
      <button onClick={() => dispatch({ type: "Multiply", payload: num })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "Divide", payload: num })}>
        Divide
      </button>
      <button onClick={() => dispatch({ type: "Modulo", payload: num })}>
        Modulo
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Restart</button>
    </div>
  );
};

export default Practice;
