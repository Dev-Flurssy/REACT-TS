import { useParams, useNavigate } from "react-router-dom";
import { IProduct, products } from "./ProductData";
import "./ProductPage.css";

interface ProductPageProps {
  basket: IProduct[];
  addToBasket: (product: IProduct) => void;
  removeFromBasket: (id: number) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({
  basket,
  addToBasket,
  removeFromBasket,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <p className="not-found">Product not found.</p>;
  }

  const inBasket = basket.some((p) => p.id === productId);

  return (
    <div className="page-container">
      <div className="product-details">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <div>
          <ul>
            {product.reviews?.map((r) => (
              <li key={r.reviewer}>
                <i>{r.comment}</i>-{r.reviewer}
              </li>
            ))}
          </ul>
        </div>
        <p className="product-price">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>

        {!inBasket ? (
          <button onClick={() => addToBasket(product)} className="add-cart">
            Add to Cart
          </button>
        ) : (
          <>
            <p className="added-message">Added to Cart</p>
            <button
              onClick={() => {
                removeFromBasket(productId);
                navigate("/products");
              }}
              className="remove-cart"
            >
              Remove from Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
