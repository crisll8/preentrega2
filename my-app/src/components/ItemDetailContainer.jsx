import React from 'react';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
  const { id } = useParams();

  const items = [
    { id: 1, name: 'Producto 1', price: 100, description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', price: 200, description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', price: 300, description: 'Descripción del Producto 3' },
  ];

  const producto = items.find(item => item.id === parseInt(id));

  return (
    <div>
      {producto ? (
        <>
          <h1>{producto.name}</h1>
          <p>Precio: ${producto.price}</p>
          <p>{producto.description}</p>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default DetalleProducto;
