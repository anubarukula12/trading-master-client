import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, createContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavbarLayout from "./components/Layout/NavbarLayout";
import Footer from "./components/Layout/Footer";
import ContentLayout from "./components/Layout/ContentLayout";
import Routes from "./Utils/routes/Routes";
import "./Utils/css/styles.css";

const App = () => {
  const [token,setToken]=useState(null)
  return (
    <div>
    
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
