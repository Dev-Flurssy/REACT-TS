import { useReducer, useState } from "react";
import { MiniCartReducer } from "./useMiniCart";

const initialList = { items: [], total: 0 };

const MiniCart = () => {
  const [state, dispatch] = useReducer(MiniCartReducer, initialList);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [discount, setDiscount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || price <= 0) {
      alert("Please enter valid item details");
      return;
    }

    const newItem = { id: Date.now(), name, price };
    dispatch({ type: "ADD", payload: newItem });

    setName("");
    setPrice(0);

    setSubmit(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Item Name"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Enter Item Price"
        />
        <button type="submit">Add Item</button>
      </form>

      {submit && (
        <div>
          <h1>Total: {state.total}</h1>
          <ul>
            {state.items.map((item) => (
              <li key={item.id}>
                {item.name}: {item.price}
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
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
            placeholder="Enter discount"
          />
          <button
            onClick={() => dispatch({ type: "DISCOUNT", payload: discount })}
          >
            Apply Discount
          </button>

          <button onClick={() => dispatch({ type: "RESET" })}>
            Reset Cart
          </button>
        </div>
      )}
    </>
  );
};

export default MiniCart;
