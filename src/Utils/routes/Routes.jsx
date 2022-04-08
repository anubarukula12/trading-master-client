import React from "react";
import { Routes, Route } from "react-router-dom";
import ContentLayout from "../../components/Layout/ContentLayout";
import UserLogin from "../../components/User/UserLogin";
import UserSignup from "../../components/User/UserSignup";
const routes = () => {

  const userHandlerValues = (name,uName,uemail,upwd) => {
   
     console.log({name:name,username: uName, email: uemail,password:upwd}) ;
    }
  return (
    <div className="route-style">
      <Routes>
        <Route path="/" element={<ContentLayout />}>
          <Route path="/signin" element={<UserLogin  />} />
          <Route path="/signup" element={<UserSignup onAddUser={userHandlerValues}/>} />
        </Route>
      </Routes>
    </div>
  );
};
export default routes;
