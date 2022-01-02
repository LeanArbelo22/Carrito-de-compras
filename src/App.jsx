import React from 'react';
import './App.css';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <>
      <h2>Carrito de compras</h2>
      <CartProvider>
      <Home />
      <Cart />
      </CartProvider>
    </>
  );
}

export default App;
