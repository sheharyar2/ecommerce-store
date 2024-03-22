import styles from './ProductDisplay.module.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

function ProductDisplay(props)
{
    const {product}=props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className={styles.productdisplay}>
           
            <div className={styles.productdisplay_left}>
                <div className={styles.productdisplay_img_list}>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className={styles.productdisplay_img}>
                    <img className={styles.productdisplay_main_img} src={product.image} alt="" />
                </div>
            </div>
            <div className={styles.productdisplay_right}>
                <h1>{product.name}</h1>
                <div className={styles.productdisplay_right_star}>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className={styles.productdisplay_right_prices}>
                    <div className={styles.productdisplay_right_pice_old}>
                        ${product.old_price}
                    </div>
                    <div className={styles.productdisplay_right_price_new}>
                        ${product.new_price}
                    </div>
                </div>
                <div className={styles.productdisplay_right_description}>
                    A lightweight, usually knitted, pullover shirt, close-fitting and with
                    a round neckline and short sleeves, worn as an undershirt or outershirt.
                </div>
                <div className={styles.productdisplay_right_size}>
                    <h1>Select Size</h1>
                    <div className={styles.productdisplay_right_sizes}>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    <button onClick={()=>{ return addToCart(product.id)}}>ADD TO CART</button>
                    <p className={styles.productdisplay_right_category}>
                        <span>Category : </span>Women , T-Shirt , Crop Top
                    </p>
                    <p className={styles.productdisplay_right_category}>
                        <span>Tags : </span>Modern ,
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ProductDisplay;