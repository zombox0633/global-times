import client from "../../config/axiosConfig";
import { CancelTokenSource } from "axios";
import { AxiosReturn } from "../../config/serviceApi.type";
import { GlobalTimePageableReturnDataType } from "../GlobalTimeService.type";
import { onHandleErrorFromAPI } from "../../config/serviceApi";

export type GetCountryDataByNamePropsType = {
  countryName: string;
  page: number;
  size: number;
  cancelToken?: CancelTokenSource;
};

async function getCountryDataByName({
  countryName,
  page,
  size,
  cancelToken,
}: GetCountryDataByNamePropsType): AxiosReturn<GlobalTimePageableReturnDataType> {
  try {
    const response = await client.get<GlobalTimePageableReturnDataType>(
      `/v1/country/name?name=${countryName}&page=${page}&size=${size}`,
      { cancelToken: cancelToken?.token },
    );

    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getCountryDataByName;
