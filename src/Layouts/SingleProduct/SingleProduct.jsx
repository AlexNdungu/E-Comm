import styles from './SingleProduct.module.css';
import productImage from './img.jpg';

function SingleProduct(){
    return(
        <div className={styles.singleProductDisplay}>
            <div className={styles.displayProductImage}>
                <img src={productImage} alt="product image" />
            </div>
            <div className={styles.display_item_descriptions}>
            </div>
        </div>
    );
}

export default SingleProduct