import { createContext, useState, type ReactNode } from "react";
interface Todo {
  id: number;
  item: string;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (item: string) => void;
  delTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (item: string) => {
    setTodos([...todos, { item, id: Date.now() }]);
  };

  const delTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, delTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
