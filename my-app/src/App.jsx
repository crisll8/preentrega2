import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import DetalleProducto from './components/DetalleProducto';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a la mejor tienda de regalos" />} />
        <Route path="/item/:id" element={<DetalleProducto />} />
      </Routes>
    </Router>
  );
};

export default App;
