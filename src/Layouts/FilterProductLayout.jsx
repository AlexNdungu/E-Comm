import styles from './filterProductLayout.module.css';
import FilterSection from './Filter/FilterSection.jsx';

function FilterProductLayout(){
    return(
        <div className={styles.lower_product_and_filter_section}>
            <FilterSection/>
        </div>
    );
}

export default FilterProductLayout