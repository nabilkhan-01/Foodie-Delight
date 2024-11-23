import React, { useState } from "react";
import "./OrderCustomizationPage.css";

function OrderCustomizationPage() {
  const [order, setOrder] = useState({
    size: "Medium",
    addOns: [],
  });

  const addOns = ["Extra Cheese", "Bacon", "Mushrooms", "Olives"];

  const handleAddOnChange = (e) => {
    const value = e.target.value;
    setOrder((prevOrder) => ({
      ...prevOrder,
      addOns: prevOrder.addOns.includes(value)
        ? prevOrder.addOns.filter((item) => item !== value)
        : [...prevOrder.addOns, value],
    }));
  };

  return (
    <div className="order-customization-page">
      <h1>Customize Your Order</h1>
      <label>
        <strong>Size:</strong>
        <select
          value={order.size}
          onChange={(e) => setOrder({ ...order, size: e.target.value })}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <div className="add-ons">
        <strong>Add-Ons:</strong>
        {addOns.map((addOn) => (
          <label key={addOn}>
            <input
              type="checkbox"
              value={addOn}
              checked={order.addOns.includes(addOn)}
              onChange={handleAddOnChange}
            />
            {addOn}
          </label>
        ))}
      </div>
      <button className="order-btn">Add to Cart</button>
    </div>
  );
}

export default OrderCustomizationPage;
