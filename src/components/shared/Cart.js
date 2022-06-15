import React,{useContext} from 'react';

//context 
import { CarttContext } from '../../context/CartContextProvider';

//fuction
import { shorten } from '../../helper/function';

//icons
import trashIcon from "../../assets/icons/trash.svg"

const Cart = (props) => {

    const {dispatch} = useContext(CarttContext);
    const {image, title, price, quantity} = props.data;

    return (
        <div>
            <img src={image} alt="product" style={{width:"150px"}}/>
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1?
                    <button onClick={()=>dispatch({type: "DECREASE" , payload:props.data})}>-</button>:
                    <button onClick={()=>dispatch({type: "REMOVE_ITEM" , payload:props.data})}><img src={trashIcon} alt="icon" style={{width:"10px"}}/></button>

                }
                    <button onClick={()=>dispatch({type: "INCREASE" , payload:props.data})}>+</button>

            </div>
        </div>
    );
};

export default Cart;