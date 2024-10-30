// AdminMenu.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/admin.css";
import logo from "../assets/logo-linktic.svg";

const AdminMenu = () => {
  return (
    <nav className="off-canvas-menu">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul className="menu-items">
        <li>
          <Link to="/admin/orders">Orders</Link>
        </li>
        <li>
          <Link to="/admin/products">Products</Link>
        </li>
        <li>
          <Link to="/admin/categories">Categories</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
        <li>
          <Link to="/admin/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/admin/configuration">Configuration</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminMenu;
