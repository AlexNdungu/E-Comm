import styles from "./CreateProductForm.module.css"
import Button from "../Auth/Btn/Button";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

function CreateProductForm(){

    const [isVisible, setVisibility] = useState(false);
    const showCategoryDropDown = () => {
        setVisibility(!isVisible);
    };

    const [categories,setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("http://localhost:8080/api/category");
                setCategories(response.data);
            }catch(error){
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const categoryInput = useRef(null)
    const updateCategory = (category) => {
        categoryInput.current.value = category.id;
        setVisibility(!isVisible);
    };

    const fileInputRef = useRef(null);
    const selectImageFile = () => {
        fileInputRef.current.click()
    };

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const handleFile = (event) => {
        setFile(event.target.files[0]);
    };

    const fileName = useRef(null)
    useEffect(() => {
        if (file) {
            fileName.current.innerHTML = file.name
        }
    }, [file]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", productName);
        formData.append("price", productPrice);
        formData.append("description", description);
        formData.append("categoryId", categoryInput.current.value);
        if (file) {
            formData.append("file", file);
        }

        try {
            const response = await axios.post("http://localhost:8080/api/product", formData, {
                headers: {
                "Content-Type": "multipart/form-data",
                },
            });
            console.log("Product created successfully", response.data);
        } catch (error) {
            console.error("Error creating product", error);
        }
    };

    return(
        <>
            <div className={styles.createProductSection}>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)}/>
                    <input type="number" placeholder="Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
                    <textarea placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                    <div className={styles.category_drop_down}>
                        <div className={styles.inner_category_drop_down} onClick={showCategoryDropDown}>
                            <span>Product Category</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                        </div>
                        <input type="text" className={styles.categoryInput} ref={categoryInput}/>
                        <div className={styles.category_drop_down_component_section} style={{display: isVisible ? 'flex' : 'none'}} >
                            {categories.map(category => 
                                <div key={category.id} className={styles.drop_down_object} onClick={() => updateCategory(category)}>
                                    <span>{category.name}</span>
                                </div>
                            )}
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