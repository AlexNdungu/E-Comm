import styles from './AuthLayout.module.css';

function AuthLogin(){
    return(
        <div className={styles.main_login_layout}>
            <div className={styles.log_lay_icon}></div>
            <div className={styles.log_lay_form}>
                <h2>Create An Account</h2>
                <span>Enter Your Details And Start Selling Now.</span>
            </div>
        </div>
    );
}

export default AuthLogin