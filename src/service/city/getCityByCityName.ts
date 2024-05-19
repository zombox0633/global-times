import client from "../../config/axiosConfig";
import { CancelTokenSource } from "axios";
import { onHandleErrorFromAPI } from "../../config/serviceApi";
import { GlobalTimeDataType } from "../GlobalTimeService.type";
import { AxiosReturn } from "../../config/serviceApi.type";

export type GetCityByCityNamePropsType = {
  cityName: string;
  cancelToken?: CancelTokenSource;
};

export type GetCityByCityNameData = GlobalTimeDataType[];

async function getCityByCityName({
  cityName,
  cancelToken,
}: GetCityByCityNamePropsType): AxiosReturn<GetCityByCityNameData> {
  try {
    const response = await client.get<GetCityByCityNameData>(`/v1/city/name?name=${cityName}`, {
      cancelToken: cancelToken?.token,
    });
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getCityByCityName;
