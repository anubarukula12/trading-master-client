import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import ContentLayout from "../../components/Layout/ContentLayout";
import UserLogin from "../../components/User/UserLogin";
import UserSignup from "../../components/User/UserSignup";
import UserProfile from "../../components/UserPage/UserProfile";
import ExcelFileUpload from "../../components/FileUpload/ExcelFileUpload";
import DashBoard from "../../components/UserPage/DashBoard";
import StockList from "../../components/UserPage/StockList";
import AboutUs from "../../components/User/AboutUs";
import Home from "../../components/User/Home";
import UserContentLayout from "../../components/UserPage/UserContentLayout";
import ProtectedRoutes from "./ProtectedRoutes";
const routes = () => {
  return (
    <div className="route-style">
      <Routes>
        <Route path="/" element={<ContentLayout />}>
          <Route path="/signin" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/home" element={<Home/>} />
        </Route>

        <Route path="/" element={<ProtectedRoutes/>}>
        <Route path="/" element={<UserContentLayout />}>
          <Route path="/userprofile" element={<UserProfile />} />
           <Route path="/DashBoard" element={<DashBoard />} /> 
          <Route path="/stocklist" element={<StockList/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
export default routes;
