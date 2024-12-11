import AuthLogin from '../Layouts/Auth/AuthLayout.jsx'


function Login(){
    return(
        <AuthLogin login={true} h2="Welcome Back !" h4="Continue Selling Your Products." btn_text="Welcome Back !" have="Don't Have An Account ?" link="Create Account"/>
    )
}

export default Login