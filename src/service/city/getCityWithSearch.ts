import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/serviceApi";
import { CancelTokenSource } from "axios";
import { AxiosReturn } from "../../config/serviceApi.type";
import { GlobalTimePageableType } from "../GlobalTimeService.type";

export type GetCityWithSearchPropsType = {
  cityName: string;
  page: number;
  size: number;
  cancelToken?: CancelTokenSource;
};

async function getCityWithSearch({
  cityName,
  page,
  size,
  cancelToken,
}: GetCityWithSearchPropsType): AxiosReturn<GlobalTimePageableType> {
  try {
    const response = await client.get<GlobalTimePageableType>(
      `/v1/city/search?name=${cityName}&page=${page}&size=${size}`,
      { cancelToken: cancelToken?.token },
    );
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getCityWithSearch;
