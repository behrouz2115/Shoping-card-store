import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//context
import { CarttContext } from '../../context/CartContextProvider';
//icone
import shopIcon from "../../assets/icons/shop.svg";

//style
import styles from "./Navbar.module.css";

const Navbar = () => {
    const {state} = useContext(CarttContext);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
               <Link className={styles.productLink} to="/product">Product</Link>
               <div className={styles.iconContainer}>
                   <Link to="/cart"><img className={styles.svg}  src={shopIcon} alt="shop"/></Link>
                   <span>{state.itemsCounter}</span>
               </div>
            </div>
            
        </div>
    );
};

export default Navbar;