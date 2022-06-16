import React, {useContext} from 'react';

//component
import Product from './shared/Product';

// Context
import {ProductsContext} from "../context/ProductContextProvider";

// Style
import styles from "./store.module.css";

const Store = () => {
    const products = useContext(ProductsContext)
    return (
        <div className={styles.container}>

       {
           products.map(product=><Product
            key={product.id}
            productData={product}/>)
        }
        </div>
    );
};

export default Store;