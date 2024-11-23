import React, { useState } from "react";
import MenuItemCard from "../components/MenuItemCard";
import "./MenuPage.css";

const menuItems = [
  { id: 1, name: "Classic Cheeseburger", category: "Main Course", price: 10.99, description: "Juicy beef patty, melted cheese, lettuce, tomato, and a soft bun." },
  { id: 2, name: "Spaghetti Bolognese", category: "Main Course", price: 12.99, description: "Traditional Italian pasta with a rich, meaty tomato sauce." },
  { id: 3, name: "Caesar Salad", category: "Starters", price: 8.99, description: "Crisp romaine, Parmesan, croutons, and Caesar dressing." },
  { id: 4, name: "Garlic Bread", category: "Starters", price: 4.99, description: "Toasted bread topped with garlic butter and parsley." },
  { id: 5, name: "Tiramisu", category: "Desserts", price: 6.99, description: "Classic Italian dessert with layers of mascarpone and coffee-soaked ladyfingers." },
  { id: 6, name: "Chocolate Lava Cake", category: "Desserts", price: 7.99, description: "Warm chocolate cake with a gooey molten center." },
];

function MenuPage({ addToCart }) {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const filteredMenu = menuItems.filter(
    (item) =>
      (filter ? item.category === filter : true) &&
      (search ? item.name.toLowerCase().includes(search.toLowerCase()) : true)
  );

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="menu-controls">
        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filters">
          <button onClick={() => setFilter("")}>All</button>
          <button onClick={() => setFilter("Main Course")}>Main Course</button>
          <button onClick={() => setFilter("Starters")}>Starters</button>
          <button onClick={() => setFilter("Desserts")}>Desserts</button>
        </div>
      </div>
      <div className="menu-grid">
        {filteredMenu.map((item) => (
          <MenuItemCard key={item.id} item={item} addToCart={addToCart} />
        ))}
        {filteredMenu.length === 0 && <p>No items match your search.</p>}
      </div>
    </div>
  );
}

export default MenuPage;
