import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totals } = useCart();

  return (
    <header className="header">
      <nav className="menu_options">
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/items">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Carrito ({totals.count})</Link>
      </nav>
    </header>
  );
}
