import React, { useRef, useEffect } from "react";
import "./ProductCard.css";

export default function ProductCard({ product, onAdd }) {
    const buttonRef = useRef(null);

    useEffect(() => {
        buttonRef.current.focus();
    }, []);

    return (
        <article
            className="card"
            role="article"
            aria-label={`Producto ${product.name}`}
        >
            <img
                className="card__img"
                src={product.image}
                alt={`Imagen del producto ${product.name}`}
            />

            <div className="card__body">
                <h3 className="card__title">{product.name}</h3>

                <p
                    className="card__price"
                    aria-label={`Precio ${product.price.toFixed(2)} euros`}
                >
                    {product.price.toFixed(2)} €
                </p>

                <button
                    ref={buttonRef}
                    className="card__btn"
                    onClick={() => onAdd(product)}
                    aria-label={`Añadir ${product.name} al carrito`}
                >
                    Añadir al carrito
                </button>
            </div>
        </article>
    );
}
