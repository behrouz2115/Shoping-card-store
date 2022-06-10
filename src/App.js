import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
//components
import Store from './components/Store';
//Context
import ProductContextProvider from './context/ProductContextProvider';

const App = () => {
  return (
    <div>
      <ProductContextProvider>
          <Switch>
            <Route path={"/products/:id"} component={ProductDetails}/>
            <Route path={"/products"} component={Store}/>
            <Redirect to="/products"/>
          </Switch>
      </ProductContextProvider>
    </div>
  );
};

export default App;