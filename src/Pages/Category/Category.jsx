import { useContext } from 'react';
import styles from './Category.module.css';
import { ShopContext } from '../../context/ShopContext';
import dropdown_icon from '../../components/assets/dropdown_icon.png';
import Item from '../../components/item/Item';

function Category(props)
{
    const {all_product}=useContext(ShopContext);
    return(
        <div className={styles.shop_category}>
            <img className={styles.shopcategory_banner} src={props.banner} alt="" />
            <div className={styles.shopcategory_indexSort}>
                <p>
                        <span>Showing 1-12</span> out of 36 Products
                </p>
                <div className={styles.shopcategory_sort}>
                    Sort by <img src={dropdown_icon} alt="" />

                </div>
            </div>
            <div className={styles.shopcategory_products}>
                {all_product.map((item,index)=>{
                    if(props.category === item.category)
                    {
                        return <Item
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                        />
                    }
                    else{
                        return null;
                    }
                }
                )}
            </div>
            <div className={styles.shopcategory_loadmore}>
                Explore More
            </div>
        </div>
    )
}
export default Category;