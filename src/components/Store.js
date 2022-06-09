import React, {useContext} from 'react';

// Context
import {ProductsContext} from "../context/ProductContextProvider"

const Store = () => {
    const products = useContext(ProductsContext)
    return (
       {
        //    products.map(product=><)
       }
    );
};

export default Store;