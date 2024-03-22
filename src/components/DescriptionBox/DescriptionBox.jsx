import styles from './DescriptionBox.module.css';
function DescriptionBox(){
    return(
        <div className={styles.descriptionbox}>
           <div className={styles.descriptionbox_navigator}>
                <div className={styles.descriptionbox_nav_box}>Description</div>
                <div className={`${styles.descriptionbox_nav_box} ${styles.descriptionbox_nav_box_fade}`}>Reviews (122)</div>
            </div> 
            <div className={styles.descriptionbox_description}>
                <p>
                    An e-commerce website is an online platform that facilitates buying and selling
                    of products or sevices over the internet serves as a virtual marketplace where 
                    businesses and individuls showcase their products.
                </p>
                <p>
                   E-commerce websites typically display products or services and 
                   detailed description ,images, prices and any available variety
                   (e.g. sizes,colors).Each product usually has its own dedicated
                   relevant information. 
                </p>
            </div>
        </div>
    )
}
export default  DescriptionBox;