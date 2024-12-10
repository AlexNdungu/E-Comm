import styles from './AuthLayout.module.css';
import EmailInput from './Email/EmailInput.jsx';
import PassInput from './Password/PassInput.jsx';
import Button from './Btn/Button.jsx';


function AuthLogin(){
    return(
        <div className={styles.main_login_layout}>
            <div className={styles.log_lay_icon}></div>
            <div className={styles.log_lay_form}>
                <div className={styles.inner_log_lay_form}>
                    <h2>Create An Account</h2>
                    <span>Enter Your Details And Start Selling Now.</span>
                    <EmailInput/>
                    <PassInput placeholder="Password"/>
                    <PassInput placeholder="Password Again"/>
                    <Button span="Create An Account" />
                </div>
            </div>
        </div>
    );
}

export default AuthLogin