import styles from "./CreateProductForm.module.css"
import Button from "../Auth/Btn/Button";

function CreateProductForm(){
    return(
        <>
            <div className={styles.createProductSection}>
                <form action="">
                    <input type="text" name="" id="" />
                    <input type="number" name="" id="" />
                    <textarea name="" id=""></textarea>
                    <Button span="Create Product" />
                </form>
            </div>
        </>
    );
}

export default CreateProductForm