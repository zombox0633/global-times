import { CancelTokenSource } from "axios";
import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/serviceApi";
import { AxiosReturn } from "../../config/serviceApi.type";
import { GetCityWithSearchReturnDataType } from "../city/getCityWithSearch.type";

export type GetCountryWithSearchPropsType = {
  countryName: string;
  page: number;
  size: number;
  cancelToken?: CancelTokenSource;
};

async function getCountryWithSearch({
  countryName,
  page,
  size,
  cancelToken,
}: GetCountryWithSearchPropsType): AxiosReturn<GetCityWithSearchReturnDataType> {
  try {
    const response = await client.get<GetCityWithSearchReturnDataType>(
      `/v1/country/search?name=${countryName}&page=${page}&size=${size}`,
      { cancelToken: cancelToken?.token },
    );
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getCountryWithSearch;
