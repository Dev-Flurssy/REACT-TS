# React and TypeScript Revision Journey

This repositary is a collection of exercises, notes, components built while revising React and TypeScript
It focuses on Mastering the Usage of Components Types, Interface useEffect useReducer useState Form etc.

---


## Topics covered Includes 

### React Basics and fundamental
- Functional components
- JSX structure
- Props and component composition

### State Management
- `useState` for local component state
- Controlled inputs (text, number)
- Resetting and updating state

### Reducers
- `useReducer` for centralized state logic
- Writing reducer functions with `switch(action.type)`
- Default case returning the current state
- Using `...state` to preserve properties
- Updating arrays with `[...state.items, newItem]`

### TypeScript Integration
- Defining interfaces for state and actions
- Discriminated union types for safe payloads
- Optional chaining (`?.`) and nullish coalescing (`??`)
- Strong typing for form inputs and reducer payloads

### Form Handling
- Controlled inputs with `onChange`
- Handling button clicks with `onClick`
- Preventing default form submission with `e.preventDefault()`
- Passing payloads from form state into reducer actions

---


## Example: Components

### Counter with Reducer

``` tsx
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

```

---
