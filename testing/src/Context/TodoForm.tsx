import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

export const TodoForm = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("TodoForm must be used inside a TodoProvider");
  }

  const { addTodo } = context;
  const [item, setItem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(item);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter your item"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
