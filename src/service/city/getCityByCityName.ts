import client from "../../config/axiosConfig";
import { CancelTokenSource } from "axios";
import { onHandleErrorFromAPI } from "../../config/serviceApi";
import { GlobalTimeDataType } from "../GlobalTimeService.type";
import { AxiosReturn } from "../../config/serviceApi.type";

export type GetCityByCityNamePropsType = {
  cityName: string;
  cancelToken?: CancelTokenSource;
};

async function getCityByCityName({
  cityName,
  cancelToken,
}: GetCityByCityNamePropsType): AxiosReturn<GlobalTimeDataType> {
  try {
    const response = await client.get<GlobalTimeDataType>(`/v1/city/name/${cityName}`, {
      cancelToken: cancelToken?.token,
    });
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getCityByCityName;
