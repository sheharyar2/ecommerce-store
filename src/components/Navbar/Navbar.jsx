import  { useState ,useRef} from "react";
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import hamburger from '../assets/hamburger.png'

function Navbar()
{
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle =(event) =>{
        menuRef.current.classList.toggle(styles.nav_menu_visible);
        event.target.classList.toggle(styles.open);
    }
    return(
        <div className={styles.navbar}>
            <div className={styles.nav_logo}>
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <img className={styles.navbar_dropdown} onClick={(event)=>dropdown_toggle(event)} src={hamburger} alt="" />
            <ul ref={menuRef} className={styles.nav_menu}>
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