import React from 'react';
import carrito from "../assets/shopping-cart.png";
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="logo-container">
      <img src={carrito} alt="carrito" />
      <div className='texto-encima'>10</div>
    </div>
  );
}

export default CartWidget;
