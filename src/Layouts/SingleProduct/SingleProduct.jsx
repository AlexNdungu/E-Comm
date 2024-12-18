import styles from './SingleProduct.module.css';
import productImage from './img.jpg';

function SingleProduct(props){
    return(
        <div className={styles.singleProductDisplay}>
            <div className={styles.displayProductImage}>
                <img src={productImage} alt="product image" />
            </div>
            <div className={styles.display_item_descriptions}>
                <div><span>Unique</span></div>
                <div><h4>{props.name}</h4></div>
                <div>
                    <span>${props.price}</span>
                    <span>14 Left</span>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct