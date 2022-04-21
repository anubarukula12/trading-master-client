import React from "react";
import { Routes, Route } from "react-router-dom";
import ContentLayout from "../../components/Layout/ContentLayout";
import UserLogin from "../../components/User/UserLogin";
import UserSignup from "../../components/User/UserSignup";
import UserNavbarLayout from "../../components/UserPage/UserNavbarLayout";
import UserContentLayout from "../../components/UserPage/UserContentLayout";
import UserProfile from "../../components/UserPage/UserProfile"
import ExcelFileUpload from "../../components/FileUpload/ExcelFileUpload";
const routes = (props) => {
  return (
    <div className="route-style">
      {/* <Routes> */}
          {/* <Route path="/" element={<ContentLayout />}>
          <Route path="/signin" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />   </Route>  */}
          <Routes>
          <Route path="/" element={<UserContentLayout />}>
           <Route path='/protected' element={<UserNavbarLayout />} /> 
           <Route path="/userprofile" element={<UserProfile/>}/>
           <Route path="/fileupload" element={<ExcelFileUpload/>}/>
           </Route>
           </Routes>
    </div>
  );
};
export default routes;
