import { AuthButton } from "./AuthButton.jsx";
import { FormError } from "./FormError.jsx";
import { FormInputs} from "./FormInputs.jsx";



export const RegisterForm=({register, handleSubmit, onSubmit, errors, isLoading, onToggleMode})=>{

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center gap-6">
        <h1
        className="text-center text-3xl font-semibold text-[#16302B]"
        style={{ fontFamily: "'Fraunces', serif" }}
       >BEGIN YOUR JOURNEY
       </h1>

       <div className="flex w-full flex-col gap-3">
        <FormInputs
        type="text"
        placeHolder="name"
        invalid={!!errors.name}
        {...register("name",{required:true})}
       />
       <FormInputs
        type="email"
        placeHolder="email"
        invalid={!!errors.email}
        {...register("email",{required:true})}
       />
       <FormInputs
        type="password"
        placeHolder="passwod"
        invalid={!!errors.password}
        {...register("password",{required:true})}
       />
       </div>
       <FormError message={errors.root?.message} />
       <AuthButton
       type="submit"
       isLoading={isLoading}
       >Create Account</AuthButton>


       <p className="text-xs text-[#F5EEDD]" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}>
        Already have an account?{" "}
        <button
          type="button"
          onClick={()=>{onToggleMode("register")}}
          className="font-medium underline underline-offset-2"
        >
          Log In
        </button>
      </p>

        </form>
        </>
    )

}