import React from "react";
import "./ProductPage.css";

interface ILogin {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<ILogin> = ({ setLogin }) => {
  return (
    <div className="page-container">
      <h1>Login</h1>
      <button onClick={() => setLogin(true)} className="add-cart">
        Login
      </button>
    </div>
  );
};

export default Login;
