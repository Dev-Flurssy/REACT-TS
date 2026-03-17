import { useLayoutEffect, useState, useEffect } from "react";

const LayoutEff = () => {
  const [value, setValue] = useState("GFG");

  useLayoutEffect(() => {
    console.log("useLayoutEffect is called with the value of", value);
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue("GeeksForGeeks");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h1 style={{ color: "green" }}>{value}</h1> is the greatest portal for
      geeks!
    </div>
  );
};

export default LayoutEff;
