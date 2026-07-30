import axios from "axios";


let accessToken=null
let refreshPromise=null
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function setAccessToken(token)
{
    accessToken=token
}

export async function refreshAccessToken()
{
    if(!refreshPromise)
    {
        const url=BACKEND_URL+"/refresh"
        refreshPromise=axios.post(url,{},{
        withCredentials:true
        })
    }

    try{
       const res= await refreshPromise
       return res.data
    }catch(error){
        throw new Error(error?.response?.data?.error,{cause:error})
    }finally{
        refreshPromise=null
    }
}

export async function authenticator(Url,options={})//options=data,method
{
    const doFetch=(token)=>{
       const url=BACKEND_URL+Url

       return axios({...options,url,
        headers:{Authorization:`Bearer ${token}`},
        withCredentials:true
     })
    }
    try {
        const res=await doFetch(accessToken)
        return res.data
        
    } catch (error) {

        if(error?.response?.status==401)
        {
            try {
                const { accessToken: newToken }=await refreshAccessToken()
                setAccessToken(newToken)
                const res=await doFetch(newToken) 
                return res.data

            } catch {
                window.location.href="/login"
                return null
            }
        }
        else{
            throw new Error("something went wrong",{cause:error})
        }
        
    }
    

}
