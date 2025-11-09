import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
    return (
        <section className="home">
            <div className="home__card">
                <h1>LOKOKOM</h1>
                <p>Ropa con actitud. Calidad-precio 🔥</p>
                <Link to="/items" className="home__cta">Ver catálogo</Link>
            </div>
        </section>
    );
}
