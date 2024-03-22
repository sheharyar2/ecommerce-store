import styles from './breadcrumbs.module.css';
import arrow_icon from '../assets/breadcrum_arrow.png'; 
function BreadCrumbs(props){
    const {product}=props;

    return(
        <div className={styles.breadcrumbs}>
            HOME <img src={arrow_icon} alt="" />SHOP
            <img src={arrow_icon} alt="" /> {product.category}
            <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}
export default BreadCrumbs;