import styles from './filterProductLayout.module.css';
import FilterSection from './Filter/FilterSection.jsx';
import ProductSections from './Products/ProductsSection.jsx';

function FilterProductLayout(){
    return(
        <div className={styles.lower_product_and_filter_section}>
            <FilterSection/>
            <ProductSections/>
        </div>
    );
}

export default FilterProductLayout