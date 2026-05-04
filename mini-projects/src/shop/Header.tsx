import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductPage.css";

interface ISearch {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSubmittedSearch: (value: string) => void;
}

const Header: React.FC<ISearch> = ({
  search,
  setSearch,
  setSubmittedSearch,
}) => {
  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSubmittedSearch(search);
    }
  };
  return (
    <div className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Logo" width={40} height={40} />
        <h1 className="header-title">React Shop</h1>
      </div>

      <nav>
        <div className="search-container">
          <input
            type="search"
            placeholder="search products ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeydown}
          />
        </div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "header-link active-link" : "header-link "
          }
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "header-link active-link" : "header-link "
          }
          to="/admin"
        >
          Admin
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "header-link active-link" : "header-link "
          }
          to="/"
        >
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
