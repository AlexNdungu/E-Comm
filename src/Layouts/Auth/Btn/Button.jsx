import styles from './Button.module.css'

function Button(props){
    return(
        <>
        <div className={styles.button_container}>
            <span>{props.span}</span>
        </div>
        </>
    );
}

export default Button