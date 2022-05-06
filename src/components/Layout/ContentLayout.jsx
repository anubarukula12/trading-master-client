import React from "react";
import NavbarLayout from "./NavbarLayout";
import { Outlet } from "react-router-dom";

const ContentLayout = () => {
  return (
    <div>
        <NavbarLayout/>
      <Outlet />
    </div>
  );
};
export default ContentLayout;
