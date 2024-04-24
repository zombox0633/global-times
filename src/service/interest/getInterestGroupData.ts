import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/serviceApi";
import { AxiosReturn } from "../../config/serviceApi.type";
import { GlobalTimePageableType } from "../GlobalTimeService.type";
import { CancelTokenSource } from "axios";

export type GetInterestGroupDataPropsType = {
  page: number;
  size: number;
  cancelToken?: CancelTokenSource;
};

async function getInterestGroupData({
  page,
  size,
  cancelToken,
}: GetInterestGroupDataPropsType): AxiosReturn<GlobalTimePageableType> {
  try {
    const response = await client.get<GlobalTimePageableType>(
      `/v1/interest-group/data?id=ad599766-362e-480f-a1d6-23830980307f&page=${page}&size=${size}`,
      {
        // withCredentials: true,
        cancelToken: cancelToken?.token,
      },
    );

    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getInterestGroupData;
