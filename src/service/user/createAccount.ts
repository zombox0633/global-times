import { onHandleErrorFromAPI } from "../../config/serviceApi";
import client from "../../config/axiosConfig";
import { CancelTokenSource } from "axios";
import { AxiosReturn } from "../../config/serviceApi.type";
import { UserType } from "./user.type";

export type CreateAccountPropsType = {
  email: string;
  password: string;
  cancelToken?: CancelTokenSource;
};

async function createAccount({
  email,
  password,
  cancelToken,
}: CreateAccountPropsType): AxiosReturn<UserType> {
  try {
    const response = await client.post<UserType>(
      "/v1/auth/register",
      {
        email: email,
        password: password,
      },
      {
        cancelToken: cancelToken?.token,
      },
    );

    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default createAccount;
