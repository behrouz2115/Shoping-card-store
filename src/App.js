import React from 'react';
//components
import Store from './components/Store';
//Context
import ProductContextProvider from './context/ProductContextProvider';

const App = () => {
  return (
    <div>
      <ProductContextProvider>
          <Store/>
      </ProductContextProvider>
    </div>
  );
};

export default App;