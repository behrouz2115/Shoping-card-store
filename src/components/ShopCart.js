import React, { useContext } from 'react';

//component
import Cart from './shared/Cart';

//context
import { CarttContext } from '../context/CartContextProvider';

const ShopCart = () => {
    const {state,dispatch}=useContext(CarttContext);
    return (
        <div>
            <h1>Shop cart</h1>
            <div>
                {state.selectedItems.map(item=><Cart key={item.id} data={item}/>)}
            </div>
        </div>
    );
};

export default ShopCart;