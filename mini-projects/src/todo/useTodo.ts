export type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

type TAction =
  | { type: "ADD"; payload: string }
  | { type: "DELETE"; payload: number }
  | { type: "TOGGLE"; payload: number };

export const MyTodo = (state: Todo[], action: TAction): Todo[] => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), name: action.payload, completed: false },
      ];

    case "DELETE":
      return state.filter((list) => list.id !== action.payload);
    case "TOGGLE":
      return state.map((list) =>
        list.id === action.payload
          ? { ...list, completed: !list.completed }
          : list,
      );
    default:
      return state;
  }
};
