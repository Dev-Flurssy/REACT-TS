import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export const TodoList = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("TodoForm must be used inside a TodoProvider");
  }
  const { todos, delTodo } = context;
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.item} <button onClick={() => delTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
