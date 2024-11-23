import React from "react";
import "./MenuItemCard.css";

function MenuItemCard({ item, addToCart }) {
  // Function to show alert when the item is added to the order
  const handleAddToCart = () => {
    addToCart(item);
    alert(`${item.name} has been added to your order!`);
  };

  return (
    <div className="menu-item-card">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Order</button>
    </div>
  );
}

export default MenuItemCard;
