import { createContext,useState } from "react";


export const authContext=createContext(null)

export function AuthProvider({children})
{
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(false)
    const [accessToken,setAccessToken]=useState(null)

    return(
        <authContext.Provider 
        value={{user,setUser,loading,setLoading,accessToken,setAccessToken}}>
        {children}
        </authContext.Provider>
    )
}
