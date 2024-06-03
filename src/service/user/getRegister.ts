import { CancelTokenSource } from "axios";
import { onHandleErrorFromAPI } from "../../config/serviceApi";
import { AxiosReturn } from "../../config/serviceApi.type";
import client from "../../config/axiosConfig";

export type GetRegisterPropsType = {
  email: string;
  jwt: string;
  cancelToken?: CancelTokenSource;
};

export type GetRegisterReturnType = {
  id: string;
  email: string;
  password: string;
  name: string;
  birthday: string;
  role: string;
  createTimestamp: string;
  lastUpdatedTimestamp: string;
};

async function getRegister({
  email,
  jwt,
  cancelToken,
}: GetRegisterPropsType): AxiosReturn<GetRegisterReturnType> {
  try {
    const response = await client.post<GetRegisterReturnType>(
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
