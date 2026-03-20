import type React from "react";
import WithName from "./WithName";

type IHello = {
  name?: string;
};

const Hello: React.FC<IHello> = ({ name }) => {
  return <h1>Hello {name}</h1>;
};
const HelloWithName = WithName(Hello);

const Name = () => {
  return (
    <>
      <div>
        <HelloWithName></HelloWithName>
      </div>
    </>
  );
};

export default Name;
