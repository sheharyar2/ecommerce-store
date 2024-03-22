import  { useState } from "react";
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function Navbar()
{
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);

    console.log("menue : " ,menu);
    return(
        <div className={styles.navbar}>
            <div className={styles.nav_log0}>
                <img src={logo} alt="" />
                <p>SHOPPER</p>

            </div>
            <ul className={styles.nav_menu}>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration :'none'}} to="/">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration :'none'}} to="/men">Men</Link> {menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration :'none'}} to="/women">Women</Link> {menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration :'none'}} to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className={styles.nav_login_cart}>
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt=""/></Link>
                <div className={styles.nav_cart_count}>
                {getTotalCartItems()}
            </div>
            </div>
          

        </div>
    )
}

export default Navbar;