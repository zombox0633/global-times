import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

const axiosApiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

axiosApiInstance.interceptors.request.use(
  (config) => {
    config.headers["X-API-KEY"] = import.meta.env.VITE_API_VALUE;

    const secret = localStorage.getItem("secret");
    const { jwt } = secret && JSON.parse(secret);

    if (jwt) {
      const jwtData = jwtDecode<{ id: string; iat: number; exp: number }>(jwt);

      //Check is expired.
      const isExpired = dayjs.unix(jwtData.exp).diff(dayjs()) < 1;
      if (isExpired) {
        localStorage.removeItem("secret");
        return config;
      }
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const client = axiosApiInstance;
export default client;
