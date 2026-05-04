import { NavLink } from "react-router-dom";
import { AdminData } from "./AdminData";
import "./AdminPage.css";

const AdminUsers: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Admin Users</h1>
      <ul className="admin-section">
        {AdminData.map((user) => (
          <li key={user.id}>
            {" "}
            <NavLink to={`/admin/users/${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUsers;
