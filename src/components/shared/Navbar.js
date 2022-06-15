import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//context
import { CarttContext } from '../../context/CartContextProvider';
//icone
import shopIcon from "../../assets/icons/shop.svg";

const Navbar = () => {
    const {state} = useContext(CarttContext);
    return (
        <div>
            <Link to="/product">Product</Link>
            <div>
                <Link to="/Cart"><img src={shopIcon} alt="shop"/></Link>
                <span>{state.itemsCounter}</span>
            </div>
            
        </div>
    );
};

export default Navbar;