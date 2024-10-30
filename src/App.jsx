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
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AdminLogin from "./pages/admin/Login";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
