
// src/App.js
import React, { useState } from 'react';


import CartIcon from '../components/CartIcon.jsx';

import ProductList from '../components/ProductList.jsx';

import './App.css'

const products = [
  { id: 1, name: "Shirt", price: 500 },
  { id: 2, name: "Jeans", price: 1200 },
  { id: 3, name: "Shoes", price: 2000 },
];




function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
if(cart.length <10) setCart(prev => [...prev, product]);

  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <CartIcon cartItems={cart} onRemoveFromCart={removeFromCart}  />
      <hr />
      <ProductList products={products} onAddToCart={addToCart} cartLength={cart.length} />
    </div>
  );
}

export default App;