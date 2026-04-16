import { Link } from "react-router-dom";
import { IProduct } from "./ProductData";
import "./ProductPage.css";

interface IProducts {
  products: IProduct[];
  search?: string;
}

const ProductsPage: React.FC<IProducts> = ({ products, search }) => {
  if (search === undefined || search.trim() === "") {
    return (
      <div className="page-container">
        <p>
          Welcome to React Shop where you can shop tools, libraries, and more.
        </p>

        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-list-item">
              <Link to={`/products/${product.id}`}>
                {product.name} - ${product.price.toFixed(2)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (filtered.length === 0) {
    return <p className="added-message">Not found</p>;
  }

  return (
    <div className="page-container">
      <ul className="product-list">
        {filtered.map((product) => (
          <li key={product.id} className="product-list-item">
            <Link to={`/products/${product.id}`}>
              {product.name} - ${product.price.toFixed(2)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
