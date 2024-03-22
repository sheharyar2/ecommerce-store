import styles from './NewCollections.module.css';
import new_collection from '../assets/new_collections';
import Item from '../item/Item';

function NewCollection(){
    return(
        <div className={styles.new_collections}>
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className={styles.collections}>
                {
                    new_collection.map((item,index)=>(
                        <Item 
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}/>
                        ))
                }
            </div>
        </div>
    )
}
export default NewCollection;