import React from "react";
import { useCart } from "../context/CartContext";
import "./cart.css";

export default function Cart() {
    const { state, dispatch, totals } = useCart();
    const entries = Object.entries(state.items);

    if (entries.length === 0) {
        return (
            <section className="cart">
                <h1>Carrito</h1>
                <p>Tu carrito está vacío.</p>
            </section>
        );
    }

    return (
        <section className="cart">
            <h1>Carrito</h1>
            <ul className="cart__list">
                {entries.map(([key, { product, qty }]) => (
                    <li key={key} className="cart__item">
                        <img src={product.image} alt={product.name} />
                        <div className="cart__meta">
                            <strong>{product.name}</strong>
                            <span>{product.price.toFixed(2)} €</span>
                            <div className="cart__qty">
                                <button onClick={() => dispatch({ type: "DEC", key })}>−</button>
                                <span>{qty}</span>
                                <button onClick={() => dispatch({ type: "INC", key })}>+</button>
                            </div>
                        </div>
                        <div className="cart__total">
                            {(product.price * qty).toFixed(2)} €
                            <button
                                className="cart__remove"
                                onClick={() => dispatch({ type: "REMOVE", key })}
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="cart__summary">
                <div>
                    <span>Artículos:</span>
                    <strong>{totals.count}</strong>
                </div>
                <div className="cart_subtotal">
                    <span>Subtotal:</span>
                    <strong>{totals.subtotal.toFixed(2)} €</strong>
                </div>
                <button className="cart__checkout" onClick={() => alert("Ojala vender XD")}>
                    Finalizar compra
                </button>
            </div>
        </section>
    );
}
