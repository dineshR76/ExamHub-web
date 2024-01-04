import { Navigate } from "react-router-dom";
import { ExamHubCurrentUser } from "utils/validations";

export const WithoutAuth = ({ children }) => {
  const { sessionToken } = ExamHubCurrentUser();

  if (sessionToken) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
