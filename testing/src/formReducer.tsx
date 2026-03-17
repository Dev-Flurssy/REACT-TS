import React, { useReducer } from "react";

const initialState = { name: "", age: "", submit: false };

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_AGE"; payload: string }
  | { type: "RESET" }
  | { type: "SUBMIT" };

const formReducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "SUBMIT":
      return { ...state, submit: true };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const FormIt = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name: state.name, age: state.age });
    dispatch({ type: "SUBMIT" });
    dispatch({ type: "RESET" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
        placeholder="Please enter your name"
      />
      <input
        type="number"
        value={state.age}
        onChange={(e) => dispatch({ type: "SET_AGE", payload: e.target.value })}
        placeholder="Please enter your age"
      />
      <button>Submit</button>
      {state.submit && <p>Form Submitted</p>};
    </form>
  );
};

export default FormIt;
