import styles from "./CreateProductForm.module.css"
import Button from "../Auth/Btn/Button";
import React, { useRef, useState, useEffect } from "react";

function CreateProductForm(){

    const fileInputRef = useRef(null);
    const selectImageFile = () => {
        fileInputRef.current.click()
    };

    const [file, setFile] = useState();
    const handleFile = (event) => {
        setFile(event.target.files[0]);
    };

    const fileName = useRef(null)
    useEffect(() => {
        if (file) {
            fileName.current.innerHTML = file.name
        }
    }, [file]);

    return(
        <>
            <div className={styles.createProductSection}>
                <form action="">
                    <input type="text" placeholder="Product Name" id="" />
                    <input type="number" placeholder="Product Price" id="" />
                    <textarea id=""></textarea>
                    <div className={styles.category_drop_down}>
                        <div className={styles.inner_category_drop_down}>
                            <span>Category</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                        </div>
                        <div className={styles.category_drop_down_component_section}>
                        </div>
                    </div>
                    <input type="file" name="file" ref={fileInputRef} className={styles.upload_product_image} onChange={handleFile} />
                    <div className={styles.select_file_section}>
                        <div onClick={selectImageFile} className={styles.select_file_btn}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zm48 96a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z"/></svg>
                        </div>
                        <div className={styles.select_file_show_name}>
                            <span ref={fileName} >File Name</span>
                        </div>
                    </div>
                    <Button span="Create Product" />
                </form>
            </div>
        </>
    );
}

export default CreateProductForm