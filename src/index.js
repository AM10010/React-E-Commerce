import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';  // Fix import
import CartProvider from './Components/Cart/CartContex'; // Fix import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>  {/* Use CartProvider instead of CartContext */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);



