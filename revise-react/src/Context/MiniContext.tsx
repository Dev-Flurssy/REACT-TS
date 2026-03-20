import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

interface MyContextType {
  name: string;
  setName: (newName: string) => void;
}

export const MyContext = createContext<MyContextType>({
  name: "Bisi",
  setName: () => {},
});

const MiniContext: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [words, setWords] = useState("Welcome Back!");

  return (
    <MyContext.Provider value={{ name: words, setName: setWords }}>
      {children}
    </MyContext.Provider>
  );
};

export default MiniContext;

/*  const { name, setName } = useContext(MyContext);
  return (
    <>
      <MiniContext>
        <h1>{name}</h1>
        <button onClick={() => setName(`Hello ${name}`)}>Change Name</button>
      </MiniContext> */
