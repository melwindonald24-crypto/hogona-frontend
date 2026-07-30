import { useState } from "react";
import { useAuthHandlers } from "./useAuthHandlers.js";
import { useForm } from "react-hook-form";




export function useAuthFrom()
{
    const [isRegister,setIsRegister]=useState(false)
    const form=useForm()
    const {loginHandler,registerHandler}=useAuthHandlers();

    const  onToggleMode=(mode)=>{

        mode==="register"?setIsRegister(true):setIsRegister(false)
    }

    const onSubmit=async (data)=>{

        try {
            if(isRegister){
             const message=await registerHandler(data)
             return{success:message}

            }else{
                const message=await loginHandler(data)
                return {success:message}
            }
   
        } catch (error) {
            form.setError("root",{message:error.message})

          }
        }
            
        
        return {...form,onSubmit,onToggleMode,isRegister}

}



