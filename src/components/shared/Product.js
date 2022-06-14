import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//functon
import { shorten } from '../../helper/function';

//context
import {CarttContext} from "../../context/CartContextProvider"

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
                <button>Add to Cart</button>                    
                </div>
            </div>
        </div>
    );
};

export default Product;