import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//context
import { ProductsContext } from '../context/ProductContextProvider';


const ProductDetails = (props) => {
    const id =props.match.params.id;
    const data=useContext(ProductsContext);
    const product =data[id-1];
    const {image, title, description, price, category}=product;

    return (
        <div>
           <img src={image} alt='product'/>
           <div>
               <h3>{title}</h3>
               <p>{description}</p>
               <p><span>Category:</span>{category}</p>
               <div>
                   <span>{price}</span>
                <Link to={"/products"}>Back to Shop</Link>
               </div>
           </div>
        </div>
    );
};

export default ProductDetails;