import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
          <Switch>
            <Route path={"/products/:id"} component={ProductDetails}/>
            <Route path={"/products"} component={Store}/>
            <Route path={"/cart"} component={ShopCart}/>
            <Redirect to="/products"/>
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
};

export default App;