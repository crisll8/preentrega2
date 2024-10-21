import React from 'react';
import './Item.css';

const Item = ({ item, addToCart }) => {
  return (
    <div className="item">
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <button onClick={() => addToCart(item)}>Agregar al Carrito</button>
    </div>
  );
};

export default Item;
