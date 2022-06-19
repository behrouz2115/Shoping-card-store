import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//functon
import { isInCart, shorten,quantityCount } from '../../helper/function';

//context
import {CarttContext} from "../../context/CartContextProvider"

//icons
import trashIcon from "../../assets/icons/trash.svg";

//styles
import styles from "./Product.module.css";

const Product = ({productData}) => {
    
    const {state,dispatch}=useContext(CarttContext);

    return (
        <div className={styles.container}>
            <img src={productData.image} alt="product" className={styles.cartImage}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link className={styles.linkContainerA} to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state,productData.id) > 1 && <button onClick={() => dispatch({type:"DECREASE", payload: productData})} className={styles.smallButton}>-</button>}
                    {quantityCount(state,productData.id) ===1 && <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: productData})} className={styles.smallButton}>{<img src={trashIcon} alt="trash" style={{width: "10px"}}></img>}</button>}
                    {quantityCount(state,productData.id) > 0 && <span className={styles.counter}>{quantityCount(state,productData.id)}</span>}
                
                    {
                         isInCart(state, productData.id) ?
                         <button className={styles.smallButton} onClick={() => dispatch({type:"INCREASE", payload: productData})}>+</button> :
                         <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>

                    }
                </div>
            </div>
        </div>
    );
};

export default Product;