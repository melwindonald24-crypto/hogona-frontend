
import { LoginForm } from "../components/LoginForm.jsx";
import { RegisterForm } from "../components/RegisterForm.jsx";
import { useAuthFrom } from "../hooks/useAuthForm";

export const AuthPage=()=>{

    const {isRegister,...formProps}=useAuthFrom()
    return(<>
    {isRegister?<RegisterForm {...formProps}/>:<LoginForm {...formProps}/>}
    </>)
}