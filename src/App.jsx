// src/App.js
import React from "react";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRouter from "./helpers/PrivateRouter";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsByCategory from "./pages/ProductsByCategory";
import AdminLogin from "./pages/admin/Login";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/categories/:cat_id/products"
          element={<ProductsByCategory />}
        />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
        <Route
          path="/admin/products"
          element={
            <PrivateRouter>
              <AdminProducts />
            </PrivateRouter>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
