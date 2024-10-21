import React from 'react';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import './Navbar.css';

const Navbar = ({ saludo }) => {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="nav-container">
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Mates</a></li>
            <li><a href="/">Cuadros</a></li>
            <li><a href="/">Obsequios para niños</a></li>
            <li><a href="/">Contacto</a></li>
          </ul>
        </nav>
        <CartWidget />
      </header>
      <ItemListContainer greeting={saludo} />
    </>
  );
};

export default Navbar;
