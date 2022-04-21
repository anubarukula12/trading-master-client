import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarLayout from "./components/Layout/NavbarLayout";
import Footer from "./components/Layout/Footer";
import ContentLayout from "./components/Layout/ContentLayout";
import Routes from "./Utils/routes/Routes";
import "./Utils/css/styles.css"
import UserNavbarLayout from "./components/UserPage/UserNavbarLayout";
import UserContentLayout from "./components/UserPage/UserContentLayout";
function App() {
  return (
    <div className="App">
      {/* <NavbarLayout/>
      <ContentLayout /> */}
      <UserNavbarLayout/>
      <UserContentLayout/>
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
