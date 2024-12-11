import AuthLogin from '../Layouts/Auth/AuthLayout.jsx'

function CreateAccount(){
    return(
        <AuthLogin page="create_account" h2="Create An Account" h4="Enter Your Details And Start Selling Now." btn_text="Create An Account" have="Have An Account ?" login="Log In"/>
    );
}

export default CreateAccount