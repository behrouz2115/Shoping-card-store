import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
//components
import Store from './components/Store';
//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

const App = () => {
  return (
    <div>
      <ProductContextProvider>
        <CartContextProvider>
          <Switch>
            <Route path={"/products/:id"} component={ProductDetails}/>
            <Route path={"/products"} component={Store}/>
            <Redirect to="/products"/>
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
};

export default App;