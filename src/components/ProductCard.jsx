import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product, onAdd }) {
    return (
        <article className="card">
            <img className="card__img" src={product.image} alt={product.name} />
            <div className="card__body">
                <h3 className="card__title">{product.name}</h3>
                <p className="card__price">{product.price.toFixed(2)} €</p>
                <button className="card__btn" onClick={() => onAdd(product)}>
                    Añadir al carrito
                </button>
            </div>
        </article>
    );
}
