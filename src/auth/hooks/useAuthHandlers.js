import { useContext, useCallback } from "react";
import { login, register, logout } from "../services/authServices.js";
import { authContext } from "../../context/authContext.js";

export function useAuthHandlers() {
  const { setUser, setLoading, setError } = useContext(authContext);
  const loginHandler = useCallback(
    async (data) => {
      setLoading(true);
      try {
        const { user } = await login(data);
        setUser(user);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    [setUser, setLoading, setError],
  );

  const registerHandler = useCallback(
    async (data) => {
   
    setLoading(true);
    try {
      const message = await register(data);
      return message;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  },[setLoading,setError])

   const logoutHandler = useCallback(
    async () => {
    setLoading(true);
    try {
      const message = await logout();
      setUser(null)
      return message;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  },[setUser,setLoading,setError])

  return {loginHandler,registerHandler,logoutHandler}
}