// src/components/CartIcon.js
import React, { useState } from 'react';
//import './CartIcon.css'; // You can style this separately

const CartIcon = ({ cartItems, onRemoveFromCart }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="cart-container" style={{ position: 'relative'}}>
      <button onClick={toggleDropdown}>
        🛒 Cart ({cartItems.length})
      </button>

      {showDropdown && (
        <div className="cart-dropdown" style={{
          position: 'absolute',
          right: 0,
          top: '100%',
          left:"240px", 
          border: '1px solid #ccc',
          padding: '10px', 
          background: '#d4d2d2ff',
          zIndex: 10,
          width: '200px',
          color:"black"
        }}>
          <h4> Cart Items</h4>
          {cartItems.length === 0 ? (
            <p style={{color:"black"}}>Cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} style={{ marginBottom: '5px' ,height:"35px", backgroundColor:"gray", display:"flex", justifyContent:"space-around", alignItems:"center" }}>
                <span>{item.name} - ₹{item.price}</span>
                <button onClick={() => onRemoveFromCart(index)} style={{height:"80%" , paddingTop:"3px" }}>X</button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CartIcon;