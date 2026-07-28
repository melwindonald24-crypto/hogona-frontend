import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function login(data) {
  const url = BACKEND_URL + "/login";
  try {
    const res = await axios.post(url, data, { withCredentials: true });
    return res.data;
  } catch (error) {
    throw new Error(
      `${error?.message} : ${error?.response?.data?.error || "no server response"}`,
      { cause: error }, 
    );
  }
}
//signin suceessfull?
export async function register(data) {
  const url = BACKEND_URL + "/register";
  try {
   const res= await axios.post(url, data, { withCredentials: true });
    return res.data.message
  } catch (error) {
    throw new Error(
      `${error?.message} : ${error?.response?.data?.error || "no server response"}`,
      { cause: error },
    );
  }
}

//logout successfull?
export async function logout() {
  const url = BACKEND_URL + "/logout";
  try {
    const res=await axios.post(url,{},{ withCredentials: true });
    return res.data.message
    
  } catch (error) {
    throw new Error(
      `${error?.message} : ${error?.response?.data?.error || "no server response"}`,
      { cause: error },
    );
  }
}
