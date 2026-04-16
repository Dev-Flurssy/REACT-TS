import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import AdminPage from "./AdminPage";
import { products } from "./ProductData";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import Login from "./Login";
import { useState } from "react";

const AppRoutes: React.FC = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  return (
    <div>
      <Router>
        <Header
          search={search}
          setSearch={setSearch}
          setSubmittedSearch={setSubmittedSearch}
        />
        <Routes>
          <Route path="/products" element={<Navigate to="/" replace />} />
          <Route
            path="/"
            element={
              <ProductsPage search={submittedSearch} products={products} />
            }
          />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route
            path="/admin"
            element={
              loginStatus ? <AdminPage /> : <Navigate to="/login/" replace />
            }
          />
          <Route path="/login" element={<Login setLogin={setLoginStatus} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
