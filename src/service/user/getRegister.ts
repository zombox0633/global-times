import { CancelTokenSource } from "axios";
import { onHandleErrorFromAPI } from "../../config/serviceApi";
import { AxiosReturn } from "../../config/serviceApi.type";
import client from "../../config/axiosConfig";
import { UserType } from "./user.type";

export type GetRegisterPropsType = {
  email: string;
  jwt: string;
  cancelToken?: CancelTokenSource;
};

async function getRegister({
  email,
  jwt,
  cancelToken,
}: GetRegisterPropsType): AxiosReturn<UserType> {
  try {
    const response = await client.post<UserType>(
      "/v1/user/profile",
      {
        email: email,
        jwt: jwt,
      },
      { cancelToken: cancelToken?.token },
    );

    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getRegister;
