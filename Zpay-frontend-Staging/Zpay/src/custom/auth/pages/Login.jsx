import Header from "../../core/components/Header";
import LoginForm from "../component/LoginForm";

 const LoginPage=()=>{
    return(
        <>
                <Header
                heading="login to your account"
                paragraph="Don't have an account yet?"
                linkName="Signup"
                linkUrl="/signup"
                />
            <LoginForm/>
        </>
    )
}

export default LoginPage;

