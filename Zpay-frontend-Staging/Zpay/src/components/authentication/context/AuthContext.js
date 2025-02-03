import { createContext,useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider=({children})=>{
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(false);
const navigate=useNavigate();

const login= async(email,password)=>{
    //call an API for authentication
    try {
        setLoading(true);
        const response=await axios.post("http://localhost:4000/api/users/login",{
            email,password
        });

        const {token,username}=response.data;

        //storing the token and username in local storage
        localStorage.setItem("token",token);
        localStorage.setItem("username",username);

        setUser({email,username});
        navigate("/dashboard");
    } catch (error){
        //Handle login error
        const errorMessage=error.response?.data?.error || "Login failed. Please check your credentials and try again.";
        throw new Error(errorMessage);
    } finally {
        setLoading(false);
    }
};

//dummy logout function
const logout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
};

//Check if the user is already authenticated on app load
useEffect(()=>{
    const loggedUser=localStorage.getItem("user");
    if(loggedUser){
        setUser(JSON.parse(loggedUser));
    }
},[])

return(
    <AuthContext.Provider value={{user,login,logout,loading}}>{children}</AuthContext.Provider>
);
};

export const useAuth=()=>{
    return useContext(AuthContext);
}