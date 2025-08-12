import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

const ProtectedRoute = () => {
  const { loggedIn } = useAuth();

  return loggedIn === true ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
