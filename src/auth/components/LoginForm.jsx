import { AuthButton } from "./AuthButton.jsx";
import { FormError } from "./FormError.jsx";
import { FormInputs} from "./FormInputs.jsx";



export const LoginForm=({register, handleSubmit, onSubmit, errors, isLoading, onToggleMode})=>{

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center gap-6">
        <h1
        className="text-center text-3xl font-semibold text-[#16302B]"
        style={{ fontFamily: "'Fraunces', serif" }}
       >WELCOME TO HOGONA</h1>
       <div className="flex w-full flex-col gap-3">
       <FormInputs
        type="email"
        placeholder="email"
        invalid={!!errors.email}
        {...register("email",{required:true})}
       />
       <FormInputs
        type="password"
        placeholder="password"
        invalid={!!errors.password}
        {...register("password",{required:true})}
       />
       </div>
       <FormError message={errors.root?.message} />

       <AuthButton
       type="submit"
       isLoading={isLoading}
       >Log in</AuthButton>


       <p className="text-xs text-[#000000]" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.35)"  ,fontFamily: "'Fraunces', serif"  }}>
        New to Hogona?{" "}
        <button
          type="button"
          onClick={()=>{onToggleMode("register")}}
          className="font-medium underline underline-offset-2"
        >
          Create one
        </button>
      </p>

        </form>
        </>
    )

}
