import { useContext } from "react";
import { LoginForm } from "../components/LoginForm.jsx";
import { RegisterForm } from "../components/RegisterForm.jsx";
import { useAuthFrom } from "../hooks/useAuthForm";
import { authContext } from "../context/authContext.jsx";
import { AuthBackground } from "../components/AuthBackground.jsx";

export const AuthPage = () => {
  const { isRegister, ...formProps } = useAuthFrom();
  const { loading } = useContext(authContext);

  return (
    <AuthBackground>
      {isRegister ? (
        <RegisterForm {...formProps} isLoading={loading} />
      ) : (
        <LoginForm {...formProps} isLoading={loading} />
      )}
    </AuthBackground>
  );
};
