import { CancelTokenSource } from "axios";
import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/serviceApi";
import { AxiosReturn } from "../../config/serviceApi.type";
import { GetCountryWithSearchReturnDataType } from "./getCountryWithSearch.type";

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
}: GetCountryWithSearchPropsType): AxiosReturn<GetCountryWithSearchReturnDataType> {
  try {
    const response = await client.get<GetCountryWithSearchReturnDataType>(
      `/v1/country/search?name=${countryName}&page=${page}&size=${size}`,
      { cancelToken: cancelToken?.token },
    );
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getCountryWithSearch;
