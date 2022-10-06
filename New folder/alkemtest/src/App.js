import "./App.css";
import { Login } from "./components/login/Login";
import { NavbarCompo } from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/homepage/HomePage";
import { Dashboard } from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import { useSelector } from "react-redux/es/exports";
import { ProductPage } from "./components/productpage/ProductPage";

function App() {
  const { isloggedin } = useSelector((state) => state.AuthReducer);

  console.log("isloggedin==>", isloggedin);

  return (
    <div className="App">
      <NavbarCompo />
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/products" element={<ProductPage />} /> */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
