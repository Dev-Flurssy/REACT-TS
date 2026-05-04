import React from "react";
import "./ProductPage.css";
import { useNavigate } from "react-router-dom";

interface ILogin {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<ILogin> = ({ setLogin }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    setLogin(true);
    navigate("/products");
  };
  return (
    <div className="page-container">
      <h1>Login</h1>
      <button onClick={handleLogin} className="add-cart">
        Login
      </button>
    </div>
  );
};

export default Login;
