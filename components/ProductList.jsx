// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, onAddToCart, cartLength }) => {
  const disabled = cartLength >= 10; 
  console.log(disabled); 
  console.log(cartLength)
  return (
    <div>
      <h2>🛒 Product List</h2>
      {products.map(product => (
        <div key={product.id}>
          <span>{product.name} - ₹{product.price}</span>
          <button onClick={() => onAddToCart(product)} disabled= {disabled}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;