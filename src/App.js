import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "./components/Layout/Footer";
import Routes from "./Utils/routes/Routes";

const App = () => {
  return (
    <div>
    
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
