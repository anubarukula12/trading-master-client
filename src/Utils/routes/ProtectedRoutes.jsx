import { Navigate, Outlet } from "react-router-dom";
const useAuth = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log("token role in the protectedroutes", token, role);
  if (token) {
    return {
      auth: true,
      role: role,
    };
  } else {
    return {
      auth: false,
      role: null,
    };
  }
};
const ProtectedRoutes = (props) => {
  const { auth, role } = useAuth();
  if (auth && role === "user") {
    return auth ? <Outlet /> : <Navigate to="/userprofile" />;
  } else if (auth && role === "admin") {
    return auth ? <Outlet /> : <Navigate to="/excelupload" />;
  } else {
    return auth ? <Outlet /> : <Navigate to="/" />;
  }
};
export default ProtectedRoutes;
