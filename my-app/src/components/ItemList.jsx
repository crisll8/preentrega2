import React from 'react';
import Item from './Item';

const ItemList = ({ items, addToCart }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ItemList;
