import { useEffect, useState } from "react";

export const Counts = () => {
  const [count, setCount] = useState(0);
  (useEffect(() => {
    const message = document.createElement("p");
    message.id = "sms";
    document.body.appendChild(message);
    message.textContent = `You clicked ${count} times`;
  }),
    [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
    </div>
  );
};

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("You clicked again");
  }, [counter]);
  return (
    <>
      <div>
        <h1>Count: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      </div>
    </>
  );
};
