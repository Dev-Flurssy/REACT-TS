import { useEffect, useState } from "react";

const Timing = () => {
  const [current, setCurrent] = useState(new Date().toLocaleTimeString());
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (running) {
      interval = setInterval(() => {
        setCurrent(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [running]);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setCurrent(new Date().toLocaleTimeString());
  };
  return (
    <div>
      <h1>Welcome to Geeks Course</h1>
      <h2>{current}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timing;
