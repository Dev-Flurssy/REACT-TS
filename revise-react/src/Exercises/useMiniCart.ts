interface Items {
  id: number;
  name: string;
  price: number;
}

interface State {
  items: Items[];
  total: number;
}

type IAction =
  | { type: "ADD"; payload: Items }
  | { type: "REMOVE"; payload: number }
  | { type: "DISCOUNT"; payload: number }
  | { type: "RESET" };

export const MiniCartReducer = (state: State, action: IAction): State => {
  switch (action.type) {
    case "ADD":
      return {
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case "REMOVE":
      const filtered = state.items.filter((item) => item.id !== action.payload);
      const removed = state.items.find((item) => item.id === action.payload);
      return {
        items: filtered,
        total: state.total - (removed?.price ?? 0),
      };
    case "DISCOUNT":
      return {
        ...state,
        total: state.total * (1 - action.payload / 100),
      };
    case "RESET":
      return { items: [], total: 0 };
    default:
      return state;
  }
};
