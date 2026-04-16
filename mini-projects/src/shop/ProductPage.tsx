import { useParams, useNavigate } from "react-router-dom";
import { IProduct, products } from "./ProductData";
import { useEffect, useState } from "react";
import "./ProductPage.css";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (id) {
      const productId = Number(id);
      const foundProduct = products.find((p) => p.id === productId);
      setProduct(foundProduct);
      setAdded(false);
    }
  }, [id]);

  if (!product) {
    return <p className="not-found">Product not found.</p>;
  }

  const handleAdd = () => {
    setAdded(true);
  };

  const handleRemove = () => {
    if (!added) return;

    const confirmRemove = window.confirm(
      " Are you sure you want to remove from cart?",
    );

    if (confirmRemove) {
      setAdded(false);
      // Remove from global cart state here
      navigate("/products"); // Redirect back to products page
    }
  };

  return (
    <div className="page-container">
      <div className="product-details">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>

        {!added ? (
          <button onClick={handleAdd} className="add-cart">
            Add to Cart
          </button>
        ) : (
          <>
            <p className="added-message">Added to Cart</p>
            <button onClick={handleRemove} className="remove-cart">
              Remove from Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
