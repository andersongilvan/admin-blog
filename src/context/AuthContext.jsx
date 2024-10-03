import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export const authContext = createContext()

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(false)
    const navigate = useNavigate()
    const tokenExist = localStorage.getItem("token")
    const userName = localStorage.getItem("userName")
    useEffect(() => {

        if (tokenExist) {
            setToken(true)
        }
        else {
            
            navigate("/")
        }
    }, [])

    return (
        <authContext.Provider value={{token, tokenExist, userName}}>
            {children}
        </authContext.Provider>
    )
}