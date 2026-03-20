interface IItem {
  id: number;
  name: string;
  price: number;
}

interface IState {
  items: IItem[];
  total: number;
}

interface IAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "APPLY_DISCOUNT" | "RESET_CART";
  payload?: any;
}

export const cartReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case "REMOVE_ITEM":
      const filtered = state.items.filter((item) => item.id !== action.payload);
      const removedItem = state.items.find(
        (item) => item.id === action.payload,
      );
      return {
        items: filtered,
        total: state.total - (removedItem?.price ?? 0),
      };
    case "APPLY_DISCOUNT":
      return {
        ...state,
        total: state.total * (1 - action.payload / 100),
      };
    case "RESET_CART":
      return { items: [], total: 0 };
    default:
      return state;
  }
};
