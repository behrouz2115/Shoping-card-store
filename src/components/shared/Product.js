import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//functon
import { isInCart, shorten,quantityCount } from '../../helper/function';

//context
import {CarttContext} from "../../context/CartContextProvider"

//icons
import trashIcon from "../../assets/icons/trash.svg";

const Product = ({productData}) => {
    
    const {state,dispatch}=useContext(CarttContext);

    return (
        <div>
            <img src={productData.image} alt="product" style={{width:"150px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    {quantityCount(state,productData.id) > 1 && <button onClick={() => dispatch({type:"DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state,productData.id) ===1 && <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: productData})}>{<img src={trashIcon} alt="trash" style={{width: "10px"}}></img>}</button>}
                
                    {
                         isInCart(state, productData.id) ?
                         <button onClick={() => dispatch({type:"INCREASE", payload: productData})}>+</button> :
                         <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>

                    }
                </div>
            </div>
        </div>
    );
};

export default Product;