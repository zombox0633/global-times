import { CancelTokenSource } from "axios";
import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/serviceApi";
import { AxiosReturn } from "../../config/serviceApi.type";

export type AuthenticateUserPropsType = {
  email: string;
  password: string;
  cancelToken?: CancelTokenSource;
};

export type AuthenticateUserReturnType = {
  jwt: string;
};

async function authenticateUser({
  email,
  password,
  cancelToken,
}: AuthenticateUserPropsType): AxiosReturn<AuthenticateUserReturnType> {
  try {
    const response = await client.post<AuthenticateUserReturnType>(
      "/v1/auth/login",
      {
        email: email,
        password: password,
      },
      { cancelToken: cancelToken?.token },
    );

    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default authenticateUser;
