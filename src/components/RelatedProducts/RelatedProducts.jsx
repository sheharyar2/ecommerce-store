import styles from './RelatedProducts.module.css';
import data_product from '../assets/data';
import Item from '../item/Item';

function RelatedProducts()
{
    return(
        <div className={styles.relatedproducts}>
            <h1>Related Products</h1>
            <hr />
            <div className={styles.relatedproducts_item}>
                {
                    data_product.map((item,index)=>
                    {
                        return  <Item 
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}/>
                    })
                }
            </div>
        </div>
    )
}
export default RelatedProducts;