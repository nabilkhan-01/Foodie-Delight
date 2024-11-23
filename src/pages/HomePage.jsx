import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to Foodie's Delight</h1>
        <p>Discover delicious meals and seasonal specials.</p>
      </header>
      <section className="featured">
        <h2>Featured Dishes</h2>
        <div className="featured-grid">
          <div className="dish-card">
            <h3>Spaghetti Carbonara</h3>
            <p>A creamy, cheesy classic!</p>
          </div>
          <div className="dish-card">
            <h3>Margherita Pizza</h3>
            <p>A perfect slice of Italy.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
