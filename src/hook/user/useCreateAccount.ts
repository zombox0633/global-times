import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchCreateAccount } from "../../redux/user/createAccountSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { handleInputChange, isPasswordValid } from "../../helper/utils";

type SignUpFormType = {
  email: string;
  password: string;
  confirmPassword: string;
};

function useCreateAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [authStatus, setAuthStatus] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [signUpForm, setSignUpForm] = useState<SignUpFormType>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange<SignUpFormType>(event, setSignUpForm);
  };

  const handleCreateAccount = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsProcessing(true);
      const { email, password, confirmPassword } = signUpForm;
      if (!isPasswordValid(password)) {
        setAuthStatus(
          "Password must include a number, an uppercase letter, a lowercase letter, and a special character.",
        );
        return;
      } else if (password !== confirmPassword) {
        setAuthStatus("Passwords do not match");
        return;
      } else {
        const result = await dispatch(fetchCreateAccount({ email: email, password: password }));
        const response = unwrapResult(result);
        if (response) {
          setAuthStatus("Account created successfully");
          setTimeout(() => {
            navigate("/login", { replace: true });
          }, 500);
        } else {
          setAuthStatus("Email already exists");
        }
      }
    } catch (error) {
      console.error(error);
      setAuthStatus("An error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    authStatus,
    isProcessing,
    handleChange,
    handleCreateAccount,
  };
}

export default useCreateAccount;
