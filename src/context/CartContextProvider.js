import React,{useReducer} from 'react';

const CartContextProvider = () => {
    const [state,disPatch]=useReducer(cartReducer,initialstate)
    return (
        <div>
            
        </div>
    );
};

export default CartContextProvider;