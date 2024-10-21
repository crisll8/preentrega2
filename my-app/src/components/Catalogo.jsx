import React, { useState } from 'react';
import ItemList from './ItemList'; 

const Catalogo = () => {
  const [cart, setCart] = useState([]);

  const items = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log(`${item.name} agregado al carrito`); 
  };

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      {}
      <ItemList items={items} addToCart={addToCart} />
    </div>
  );
};

export default Catalogo;
