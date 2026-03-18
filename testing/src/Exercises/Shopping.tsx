import { useState } from "react";

const Shop = () => {
  const [items, setItem] = useState<string[]>(["Pen", "Paper", "Bag"]);
  const [addItem, setAddItem] = useState("");
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (addItem === "") return;
    setItem([...items, addItem]);
    setAddItem("");
  };
  const handleRemoveItem = (it: string) => {
    setItem(items.filter((item) => item !== it));
    alert(`You added ${it}`);
  };

  return (
    <div>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={addItem}
          onChange={(e) => setAddItem(e.target.value)}
          placeholder="Please Enter Item"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((val) => (
          <li key={val}>
            {val} <button onClick={() => handleRemoveItem(val)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
