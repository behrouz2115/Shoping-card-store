import React from 'react';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt="product"/>
            <h3>{productData.title}</h3>
            <p>{productData.price}</p>
            <div>
                <a href='#'>Details</a>
                <div>
                <button>Add to Cart</button>                    
                </div>
            </div>
        </div>
    );
};

export default Product;