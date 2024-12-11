import AuthLogin from '../Layouts/Auth/AuthLayout.jsx'

function CreateAccount(){
    return(
        <AuthLogin login={false} h2="Create An Account" h4="Enter Your Details And Start Selling Now." btn_text="Create An Account" have="Have An Account ?" link="Log In"/>
    );
}

export default CreateAccount