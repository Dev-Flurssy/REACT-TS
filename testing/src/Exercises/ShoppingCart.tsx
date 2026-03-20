import { useReducer, useState } from "react";
import { cartReducer } from "./useCart";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const addItem = () => {
    const newItem = { id: Date.now(), name, price };
    dispatch({ type: "ADD_ITEM", payload: newItem });
    setName("");
    setPrice(0);
  };

  return (
    <div>
      <h1>Total: ${state.total.toFixed(2)}</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Item price"
      />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: item.id })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <input
        type="number"
        value={discount}
        onChange={(e) => setDiscount(Number(e.target.value))}
        placeholder="Discount %"
      />
      <button
        onClick={() => dispatch({ type: "APPLY_DISCOUNT", payload: discount })}
      >
        Apply Discount
      </button>

      <button onClick={() => dispatch({ type: "RESET_CART" })}>
        Reset Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
