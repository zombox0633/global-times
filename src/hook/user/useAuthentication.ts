import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { fetchAuthenticate } from "../../redux/user/authenticateSlice";
import { clearRegisterData, fetchGetRegister } from "../../redux/user/getRegisterSlice";
import { AppDispatch } from "../../redux/store";
import { clearAuthData, setAuthData } from "../../redux/user/authDataSlice";
import { handleInputChange } from "../../helper/utils";

type DataForVerifyType = {
  email: string;
  password: string;
};

function useAuthentication() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [authStatus, setAuthStatus] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [dataForVerify, setDataForVerify] = useState<DataForVerifyType>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange<DataForVerifyType>(event, setDataForVerify);
  };

  const onAuthenticate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsProcessing(true);
      setAuthStatus("Verifying user information...");
      const resultAuthenticate = await dispatch(
        fetchAuthenticate({ email: dataForVerify.email, password: dataForVerify.password }),
      );
      //จัดการผลลัพธ์ของ async thunk actions โดยจะช่วยให้สามารถดึงค่า payload ที่อยู่ภายในผลลัพธ์ของ thunk ได้โดยตรง
      const resultAuthenticateData = unwrapResult(resultAuthenticate);
      if (resultAuthenticateData) {
        const resultRegister = await dispatch(
          fetchGetRegister({ email: dataForVerify.email, jwt: resultAuthenticateData.jwt }),
        );
        const resultRegisterData = unwrapResult(resultRegister);
        if (resultRegisterData) {
          localStorage.setItem("isAuthenticated", "true");
          const authData = {
            email: dataForVerify.email,
            jwt: resultAuthenticateData.jwt,
          };
          // localStorage.setItem("secret", JSON.stringify(authData));
          dispatch(setAuthData(authData));

          setAuthStatus("Successfully authenticated.");
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 500);
        } else {
          setAuthStatus("Registration failed.");
        }
      } else {
        setAuthStatus("An error occurred during authentication.");
      }
    } catch (error) {
      console.error(error);
      setAuthStatus("Invalid credentials. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const onSignOut = () => {
    dispatch(clearAuthData());
    dispatch(clearRegisterData());
    localStorage.removeItem("secret");
    navigate("/login");
  };

  return {
    authStatus,
    isProcessing,
    handleChange,
    onAuthenticate,
    onSignOut,
  };
}

export default useAuthentication;
