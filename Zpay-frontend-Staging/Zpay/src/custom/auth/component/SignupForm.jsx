import React,{useState} from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields=signupFields;
let fieldState={}
fields.forEach(field=>{fieldState[field.id]=''})

const SignupForm=()=>{
    const [signupState,setsignupState]=useState(fieldState);
    const handleChange=(e)=>{
        setsignupState({...signupState,[e.target.id]:e.target.value})
    }

    const handleSubmit=()=>{
        e.preventDefault();
        console.log(signupState);
        createAccount();
    }

    //to handle Signup API integration here
    const createAccount=()=>{

    }

    return(
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
            {
                fields.map(field=>{
                    <Input
                    key={field.id}
                    handleChange={handleChange}
                    value={signupState[field.id]}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                    />
                })
            }
            <FormAction handleSubmit={handleSubmit} text="Signup"/>
        </div>
    </form>
    )
}

export default SignupForm;