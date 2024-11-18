import styles from './AuthLayout.module.css';
import EmailInput from './Email/EmailInput.jsx';
import PassInput from './Password/PassInput.jsx';


function AuthLogin(){
    return(
        <div className={styles.main_login_layout}>
            <div className={styles.log_lay_icon}></div>
            <div className={styles.log_lay_form}>
                <h2>Create An Account</h2>
                <span>Enter Your Details And Start Selling Now.</span>
                <EmailInput/>
            </div>
        </div>
    );
}

export default AuthLogin