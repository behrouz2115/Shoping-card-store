import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//component
import Cart from './shared/Cart';

//context
import { CarttContext } from '../context/CartContextProvider';

//styles 
import styles from "./ShopCart.module.css";

const ShopCart = () => {
    const {state,dispatch}=useContext(CarttContext);
    return (
        <div className={styles.container}> 
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item=><Cart key={item.id} data={item}/>)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Totoal Items: </span>{state.itemsCounter}</p>
                    <p><span>Totoal Payments: </span>{state.total} $</p>
                    <div className={styles.buttonContainer}>
                    <button className={styles.checkout} onClick={()=>dispatch({type:"CHECKOUT"})}>Check out</button>
                    <button className={styles.clear} onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
             {
                 !state.chechout && state.itemsCounter === 0 && <div className={styles.complete}>
                <h3>Want to Buy?</h3>
                <Link className={styles.completeP} to="/products">Go to Shop</Link>
            </div>
            }
            {
              state.chechout && <div className={styles.complete}>
                <h3>Check out Successfully</h3>
                <Link className={styles.completeP}  to="/products"> Buy More</Link>
            </div>
            }
        </div>
    );
};

export default ShopCart;