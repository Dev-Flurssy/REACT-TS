import React from "react";
import { NavLink } from "react-router-dom";
import { AdminData, ProductData } from "./AdminData";
import "./AdminPage.css";

const AdminPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Admin Dashboard</h1>
      <div className="admin-dashboard">
        <div className="admin-users">
          <h2 className="admin-title">Users</h2>
          <ul className="admin-users-list">
            {AdminData.map((u) => (
              <li key={u.id} className="admin-users-list-item">
                <NavLink to={`/admin/users/${u.id}`}>{u.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="admin-products">
          <h2 className="admin-title">Products</h2>
          <ul className="admin-products-list">
            {ProductData.map((p) => (
              <li key={p.id} className="admin-products-item">
                <NavLink to={`/admin/products/${p.id}`}>
                  {p.name} - ${p.price}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
