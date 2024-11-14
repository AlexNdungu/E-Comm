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
                            <div className={styles.arrow_up_down}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                            </div>
                        </div>
                        <div className={styles.search_brand_section}>
                            <input type="text" placeholder='Search' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterSection