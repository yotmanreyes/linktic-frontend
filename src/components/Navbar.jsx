// src/components/Navbar.js
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../styles/navbar.css";
import logo from "../assets/logo-linktic.svg";
import login from "../assets/login.svg";
import shopcart from "../assets/shopcart.svg";
import home from "../assets/home.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <SearchBar></SearchBar>
      <ul className="menu">
        <li>
          <Link to="/">
            Inicio <img src={home} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            Carrito <img src={shopcart} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/sign-in">
            Acceder <img src={login} alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
