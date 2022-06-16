import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//component
import Cart from './shared/Cart';

//context
import { CarttContext } from '../context/CartContextProvider';

const ShopCart = () => {
    const {state,dispatch}=useContext(CarttContext);
    return (
        <div>
            <div>
                {state.selectedItems.map(item=><Cart key={item.id} data={item}/>)}
            </div>
            {
                state.itemsCounter > 0 && <div>
                    <button onClick={()=>dispatch({type:"CHECKOUT"})}>Check out</button>
                    <button onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
                </div>
            }
            {
              state.chechout && <div>
                <h3>Check out Successfully</h3>
                <Link to="/products">Buy More</Link>
            </div>
            }
             {
              !state.chechout && state.itemsCounter === 0 && <div>
                <h3>Want to Buy?</h3>
                <Link to="/products">Go to Shop</Link>
            </div>
            }
        </div>
    );
};

export default ShopCart;