import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import AdminPage from "./AdminPage";
import { IProduct, products } from "./ProductData";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import Login from "./Login";
import { useState } from "react";
import AdminProducts from "./AdminProducts";
import AdminUser from "./AdminUser";
import AdminUsers from "./AdminUsers";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminProduct from "./AdminProduct";

const AppRoutes: React.FC = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [basket, setBasket] = useState<IProduct[]>([]);
  const addToBasket = (product: IProduct) => {
    if (!basket.some((p) => p.id === product.id)) {
      setBasket([...basket, product]);
    }
  };

  const removeFromBasket = (productId: number) => {
    setBasket(basket.filter((p) => p.id !== productId));
  };

  return (
    <div>
      <Router>
        {loginStatus && (
          <Header
            search={search}
            setSearch={setSearch}
            setSubmittedSearch={setSubmittedSearch}
          />
        )}

        <Routes>
          <Route
            path="/"
            element={
              loginStatus ? (
                <Navigate to="/products" replace />
              ) : (
                <Login setLogin={setLoginStatus} />
              )
            }
          />
          <Route
            path="/products"
            element={
              <ProductsPage search={submittedSearch} products={products} />
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProductPage
                basket={basket}
                addToBasket={addToBasket}
                removeFromBasket={removeFromBasket}
              />
            }
          />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoutes isLoggedIn={loginStatus}>
                <AdminPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoutes isLoggedIn={loginStatus}>
                <AdminUsers />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoutes isLoggedIn={loginStatus}>
                <AdminProducts />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/users/:id"
            element={
              <ProtectedRoutes isLoggedIn={loginStatus}>
                <AdminUser />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/products/:id"
            element={
              <ProtectedRoutes isLoggedIn={loginStatus}>
                <AdminProduct />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
