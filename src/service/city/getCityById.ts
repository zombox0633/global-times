import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/serviceApi";
import { AxiosReturn } from "../../config/serviceApi.type";
import { GetCityByIdType } from "./getCityById.type";

async function getCityById(id: string): AxiosReturn<GetCityByIdType> {
  try {
    const response = await client.get<GetCityByIdType>(`/v1/city/${id}`);
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getCityById;
