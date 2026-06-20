import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  return currentUser ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoute;