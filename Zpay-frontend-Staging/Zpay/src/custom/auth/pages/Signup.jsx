import Header from "../../core/components/Header";
import SignupForm from "../component/SignupForm";

const SignupPage=()=>{
    return <div>
    
       <Header
        heading="Signup for a account"
        paragraph="No Account? No worries, signup now"
        linkName="singin"
        linkUrl="/"/>
       <SignupForm/>
    </div>
}

export default SignupPage;