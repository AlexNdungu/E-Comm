import styles from './filterSection.module.css';

function FilterSection(){
    return(
        <div className={styles.filter_section}>
            <div className={styles.inner_filter_section}>
                <div className={styles.filter_adv_section}>
                    <span className={styles.filter_span} >Filter</span>
                    <span className={styles.adv_span} >Advanced</span>
                </div>
                <div className={styles.brand_filtering_tool_section}>
                    <div className={styles.brand_filter_tool}>
                        <div className={styles.brand_span_and_arrow}>
                            <span>Brand</span>
                            <div className={styles.arrow_up_down}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterSection