import { useParams } from "react-router-dom";
import { ProductData } from "./AdminData";
import "./AdminPage.css";

const AdminProduct = () => {
  const { id } = useParams();

  const product = ProductData.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="page-container">
      <h1 className="admin-title">{product.name}</h1>
      <p className="admin-product-price">Price: ${product.price}</p>
      <p className="admin-product-description">{product.description}</p>
    </div>
  );
};

export default AdminProduct;
