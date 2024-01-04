import { useLocation, Navigate } from "react-router-dom";
import { ExamHubCurrentUser } from "utils/validations";

export const RequireAuth = ({ children }) => {
  const { sessionToken } = ExamHubCurrentUser();
  const location = useLocation();

  if (!sessionToken) {
    return <Navigate to="/app/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};
