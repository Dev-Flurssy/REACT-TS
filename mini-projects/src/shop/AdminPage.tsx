import React, { useState } from "react";
import "./ProductPage.css";

const AdminPage: React.FC = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <div className="page-container">
      {loginStatus ? (
        <h1>Welcome to the Admin Page.</h1>
      ) : (
        <>
          <p>Please login to access admin features.</p>
          <button onClick={() => setLoginStatus(true)} className="add-cart">
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default AdminPage;
