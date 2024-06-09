import client from "../config/axiosConfig";
import { onHandleErrorFromAPI } from "../config/serviceApi";
import { AxiosReturn } from "../config/serviceApi.type";

async function getHealthCheck(): AxiosReturn<string> {
  try {
    const response = await client.get<string>("/health");

    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getHealthCheck;
