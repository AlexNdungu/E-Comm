import styles from './productsSection.module.css';
import SingleProduct from '../SingleProduct/SingleProduct.jsx';
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

function ProductSections(){

    const [products,setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("http://localhost:8080/api/product");
                setProducts(response.data);
            }catch(error){
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return(
        <div className={styles.products_section}>
            <div className={styles.upper_layout_sort_by_section}>
                <div className={styles.select_layout_sort_by_section}>
                    <div className={styles.select_layout_btns}>
                        <div className={styles.line_layout}>
                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 12.7h-18v7.3c0 .62.519 1 1 1h16c.621 0 1-.52 1-1zm-18-1.4h18v-7.3c0-.478-.379-1-1-1h-16c-.478 0-1 .379-1 1z" fillRule="nonzero"/></svg>
                        </div>
                        <div className={styles.grid_layout}>
                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m8 16h-5v4c0 .621.52 1 1 1h4zm6.6 5v-5h-5.2v5zm6.4-5h-5v5h4c.478 0 1-.379 1-1zm0-1.4v-5.2h-5v5.2zm-18-5.2v5.2h5v-5.2zm11.6 0h-5.2v5.2h5.2zm1.4-6.4v5h5v-4c0-.478-.379-1-1-1zm-8 5v-5h-4c-.62 0-1 .519-1 1v4zm6.6-5h-5.2v5h5.2z" fillRule="nonzero"/></svg>
                        </div>
                    </div>
                    <div className={styles.sort_by_section}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/></svg>
                        <span className={styles.the_sort_by_span}>Sort By:</span>
                        <span className={styles.display_sort_span} >Popularity</span>
                    </div>
                </div>
            </div>
            <div className={styles.product_display_section}>
                {products.map(product => 
                    <SingleProduct key={product.id} name={product.name} price={product.price}/>
                )}
            </div>
        </div>
    );
}

export default ProductSections