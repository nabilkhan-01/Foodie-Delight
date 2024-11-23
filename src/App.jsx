import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import OrderCustomizationPage from "./pages/OrderCustomizationPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import AuthPage from "./pages/AuthPage";

function App() {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If the item already exists, increase the quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If the item is new, add it with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Pass addToCart and cart to MenuPage */}
          <Route
            path="/menu"
            element={<MenuPage addToCart={addToCart} cart={cart} />}
          />
          <Route path="/order" element={<OrderCustomizationPage />} />
          {/* Pass cart and clearCart to ShoppingCartPage */}
          <Route
            path="/cart"
            element={<ShoppingCartPage cart={cart} setCart={setCart} clearCart={clearCart} />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
