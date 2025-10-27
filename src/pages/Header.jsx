import React from "react"
import './header.css'
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <nav className="menu_options">
      <Link to="/collections">Collections</Link>
      <Link to="">Contlinkct</Link>
      <Link to="">Items</Link>
    </nav>
  </div>
);

export default Header;