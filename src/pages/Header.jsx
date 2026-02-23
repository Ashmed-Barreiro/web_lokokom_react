import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totals } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">MiTienda</div>

      <button
        className="header__toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}>☰</button>

      <nav className={`menu_options ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/items">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Carrito ({totals.count})</Link>
      </nav>
    </header>
  );
}