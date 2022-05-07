import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ContentLayout from "../../components/Layout/ContentLayout";
import UserLogin from "../../components/User/UserLogin";
import UserSignup from "../../components/User/UserSignup";
import UserProfile from "../../components/UserPage/UserProfile";
import DashBoard from "../../components/UserPage/DashBoard";
import AboutUs from "../../components/User/AboutUs";
import Home from "../../components/User/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import RecordList from "../../components/AdminPage/RecordList";
import Edit from "../../components/AdminPage/Edit";
import Create from "../../components/AdminPage/Create";
import AdminNavbar from "../../components/AdminPage/AdminNavbar";
import AddStock from "../../components/AdminPage/stock/AddStock";
import EODStockList from "../../components/AdminPage/stock/EODStockList";
import ExcelUpload from "../../components/AdminPage/stock/ExcelUpload";
import StockEdit from "../../components/AdminPage/stock/StockEdit";
import StockList from "../../components/AdminPage/stock/StockList";
import Eodstocklistedit from "../../components/AdminPage/stock/Eodstocklistedit";
import UserList from "../../components/AdminPage/UserList";
import AddPortfolio from "../../components/UserPage/AddPortfolio";
import PortfolioList from "../../components/UserPage/PortfolioList";
import PortfolioListEdit from "../../components/UserPage/PortfolioListEdit";
import PasswordChange from "../../components/UserPage/PasswordChange"
const routes = () => {
  return (
    <div className="route-style">
      <Routes>
        <Route path="/" element={<ContentLayout />}>
          <Route path="/signin" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<ProtectedRoutes role="user" />}>
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/stocklist" element={<StockList />} />
          <Route path="/addportfolio" element={<AddPortfolio />} />
          <Route path="/portfolios" element={<PortfolioList />} />
          <Route path="/portfolio_stock/edit/:id" element={<PortfolioListEdit />} />
          <Route path="/passwordchange" element={<PasswordChange/>} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/" element={<ProtectedRoutes role="admin" />}>
          <Route path="/adminnavbar" element={<AdminNavbar />} />
          <Route path="/country" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/stock/edit/:id" element={<StockEdit />} />
          <Route path="/create" element={<Create />} />
          <Route path="/stocks" element={<StockList />} />
          <Route path="/addstock" element={<AddStock />} />
          <Route path="/excelupload" element={<ExcelUpload />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/eodstockdata" element={<EODStockList />} />
          <Route
            path="/eod_stock_data/edit/:id"
            element={<Eodstocklistedit />}
          />
        </Route>
      </Routes>
    </div>
  );
};
export default routes;
