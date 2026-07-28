import { createContext,useState } from "react";


export const authContext=createContext(null)

export function AuthProvider({children})
{
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    const [isRegister,setIsRegister]=useState(false)
    

    return(
        <authContext.Provider 
        value={{user,setUser,loading,setLoading,error,setError,isRegister,setIsRegister}}>
        {children}
        </authContext.Provider>
    )
}
