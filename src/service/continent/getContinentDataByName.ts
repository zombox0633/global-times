import { CancelTokenSource } from "axios";
import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/serviceApi";
import { AxiosReturn } from "../../config/serviceApi.type";
import { GetContinentReturnDataType } from "./getContinentDataByName.type";

export type GetContinentDataByNamePropsType = {
  continentName: string;
  page: number;
  size: number;
  cancelToken?: CancelTokenSource;
};

async function getContinentDataByName({
  continentName,
  page,
  size,
  cancelToken,
}: GetContinentDataByNamePropsType): AxiosReturn<GetContinentReturnDataType> {
  try {
    const response = await client.get<GetContinentReturnDataType>(
      `/v1/continent/name?name=${continentName}&page=${page}&size=${size}`,
      { cancelToken: cancelToken?.token },
    );
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getContinentDataByName;
