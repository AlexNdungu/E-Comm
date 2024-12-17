import styles from './Button.module.css'

function Button(props){
    return(
        <>
            <button className={styles.button_container}>
                <span>{props.span}</span>
            </button>
        </>
    );
}

export default Button