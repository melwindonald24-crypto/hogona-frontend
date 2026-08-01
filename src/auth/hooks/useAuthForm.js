import { useState } from "react";
import { useAuthHandlers } from "./useAuthHandlers.js";
import { useForm } from "react-hook-form";




export function useAuthFrom()
{
    const [isRegister,setIsRegister]=useState(false)
    const form=useForm()
    const {errors}=form.formState
    const {loginHandler,registerHandler}=useAuthHandlers();

    const  onToggleMode=(mode)=>{
        form.clearErrors("root")
        mode==="register"?setIsRegister(true):setIsRegister(false)
    }

    const onSubmit=async (data)=>{
        try {
            if(isRegister){
             const message=await registerHandler(data)
             form.setError("root",{message:message})

            }else{
                const message=await loginHandler(data)
                form.setError("root",{message:message})

            }
   
        } catch (error) {
            form.setError("root",{message:error.message})
        }
    }

        return {...form,errors,onSubmit,onToggleMode,isRegister}

}



