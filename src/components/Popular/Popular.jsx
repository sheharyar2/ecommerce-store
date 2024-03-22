import styles from './Popular.module.css';
import data_product from  '../assets/data';
import Item from '../item/Item';

function Popular(){
    return(
        <div className={styles.popular}>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
        <div className={styles.popular_item}>
            {data_product.map((data,index)=>(
            <Item 
            key={index} 
            id={data.id}
            name={data.name}
            image={data.image}
            new_price={data.new_price}
            old_price={data.old_price}
            />))}
        </div>
        </div>
    )
}
export default Popular;