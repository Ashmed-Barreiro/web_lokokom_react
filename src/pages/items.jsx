import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import "./items.css";

export default function Items() {
  const { dispatch } = useCart();

  const add = (product) => {
    dispatch({ type: "ADD", product });
  };

  return (
    <section className="items">
      <h1>Catálogo</h1>
      <div className="items__grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={add} />
        ))}
      </div>
    </section>
  );
}
