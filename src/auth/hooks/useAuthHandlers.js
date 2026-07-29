import { useContext, useCallback } from "react";
import { login, register, logout } from "../services/authServices.js";
import { authContext } from "../context/authContext.js";

export function useAuthHandlers() {
  const { setUser, setLoading,setAccesssToken} = useContext(authContext);
  const loginHandler = useCallback(
    async (data) => {
      setLoading(true);
      try {
        const { user,accessToken } = await login(data);
        setUser(user)
        setAccesssToken(accessToken)
        return("login sucessfull!!")
      } catch (error) {
         throw new Error(error.message,{cause:error});
      } finally {
        setLoading(false);
      }
    },
    [setUser, setLoading],
  );

  const registerHandler = useCallback(
    async (data) => {
   
    setLoading(true);
    try {
      const message = await register(data);
      return message;
    } catch (error) {
      throw new Error(error.message,{cause:error});
    } finally {
      setLoading(false);
    }
  },[setLoading])

   const logoutHandler = useCallback(
    async () => {
    setLoading(true);
    try {
      const message = await logout();
      setUser(null)
      return message;
    } catch (error) {
      throw new Error(error.message,{cause:error});
    } finally {
      setLoading(false);
    }
  },[setUser,setLoading])

  return {loginHandler,registerHandler,logoutHandler}
}