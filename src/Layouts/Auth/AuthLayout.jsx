import styles from './AuthLayout.module.css';
import EmailInput from './Email/EmailInput.jsx';
import PassInput from './Password/PassInput.jsx';
import Button from './Btn/Button.jsx';


function AuthLogin(props){
    return(
        <div className={styles.main_login_layout}>
            <div className={styles.log_lay_icon}></div>
            <div className={styles.log_lay_form}>
                <div className={styles.inner_log_lay_form}>
                    <h2>{props.h2}</h2>
                    <h4>{props.h4}</h4>
                    <EmailInput/>
                    <PassInput placeholder="Password"/>
                    <PassInput placeholder="Password Again"/>
                    <Button span={props.btn_text}/>
                    <div className={styles.have_an_account_section}>
                        <span>{props.have}</span>
                        <span>{props.login}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthLogin