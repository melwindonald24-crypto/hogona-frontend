import { createContext,useState } from "react";

// The context is intentionally exported alongside its provider for this small auth module.
// eslint-disable-next-line react-refresh/only-export-components
export const authContext=createContext(null)

export function AuthProvider({children})
{
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(false)


    return(
        <authContext.Provider 
        value={{user,setUser,loading,setLoading}}>
        {children}
        </authContext.Provider>
    )
}
