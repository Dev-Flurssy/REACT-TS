import { Navigate } from "react-router-dom";

interface Props {
  isLoggedIn: boolean;
  children: React.ReactNode;
}

const ProtectedRoutes: React.FC<Props> = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
