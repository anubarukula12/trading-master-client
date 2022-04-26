import React from "react";
import { Outlet } from "react-router-dom";
import DashBoard from "./DashBoard";
import ProtectedRoutes from "../../Utils/routes/ProtectedRoutes";
const UserContentLayout = () => {
  return <div>
 <Outlet/>
  </div>
}
export default UserContentLayout;