import { createContext,useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider=({children})=>{
const [user,setUser]=useState(null);
const navigate=useNavigate();

const login=(email,password)=>{
    //call an API for authentication
    setUser({email})
    navigate("/dashboard")
};

//dummy logout function
const logout=()=>{
    setUser(null);
    //navigate back to login
    navigate("/login")
};

//Check if the user is already authenticated on app load
useEffect(()=>{
    const loggedUser=localStorage.getItem("user");
    if(loggedUser){
        setUser(JSON.parse(loggedUser));
    }
},[])

return(
    <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>
)

}

export const useAuth=()=>{
    return useContext(AuthContext);
}