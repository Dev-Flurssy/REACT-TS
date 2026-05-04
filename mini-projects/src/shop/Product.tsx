import React, { useState } from "react";
import { IProduct } from "./ProductData";

interface ProductProps {
  product: IProduct;
  inBasket: boolean;
  addToBasket: () => void;
}

const Product: React.FC<ProductProps> = ({
  product,
  inBasket,
  addToBasket,
}) => {
  const [added, setAdded] = useState(false);

  const handleAddClick = () => {
    addToBasket();
    setAdded(true);
  };

  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="product-price">
        {new Intl.NumberFormat("en-US", {
          currency: "USD",
          style: "currency",
        }).format(product.price)}
      </p>
      {!inBasket && !added && (
        <button onClick={handleAddClick}>Add to Basket</button>
      )}
    </React.Fragment>
  );
};

export default Product;
