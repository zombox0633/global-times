import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchGetRegister } from "../../redux/user/getRegisterSlice";

function useRegisterWithSecret() {
  const dispatch = useDispatch<AppDispatch>();
  const secret = localStorage.getItem("secret");

  const isMounted = useRef<boolean>(true);

  const getRegisterWithSecret = useCallback(async () => {
    try {
      if (secret) {
        const { email, jwt } = JSON.parse(secret);
        await dispatch(fetchGetRegister({ email, jwt }));
      } else {
        throw new Error("Invalid secret format");
      }
    } catch (error) {
      console.error("Error parsing secret or fetching register:", error);
    }
  }, [secret, dispatch]);

  useEffect(() => {
    if (secret && isMounted.current) {
      getRegisterWithSecret();
    }

    return () => {
      isMounted.current = false;
    };
  }, [secret, getRegisterWithSecret]);

  return null;
}

export default useRegisterWithSecret;
