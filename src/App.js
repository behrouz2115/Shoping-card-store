import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
//components
import Store from './components/Store';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

const App = () => {
  return (
    <div>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar/>
         <Routes>

            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/products" element={<Store/>}/>
            <Route path="/*" element={<Store/>}/>
            <Route path="/cart" element={<ShopCart/>}/>
          
         </Routes>
          
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
};

export default App;