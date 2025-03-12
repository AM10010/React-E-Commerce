import React, { createContext, useState } from "react";

export const CartContext = createContext(); // Creating Context

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];  // ✅ Ensure quantity starts at 1
      }
    });
  };
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
  
  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };
  
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart , removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
