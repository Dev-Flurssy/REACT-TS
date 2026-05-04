import { useParams } from "react-router-dom";
import { AdminData } from "./AdminData";
import "./AdminPage.css";

const AdminUser = () => {
  const { id } = useParams();

  const user = AdminData.find((u) => u.id === Number(id));

  if (!user) return <p>User not found</p>;

  return (
    <div className="page-container">
      <h1 className="admin-title">{user.name}</h1>
      <p className="admin-user-is-admin">
        Is Admin: {user.isAdmin ? "Yes" : "No"}
      </p>
      <p className="admin-user-purchases">
        Purchases: {user.purchases.join(", ")}
      </p>
    </div>
  );
};

export default AdminUser;
