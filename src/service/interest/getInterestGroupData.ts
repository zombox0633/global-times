import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/serviceApi";
import { AxiosReturn } from "../../config/serviceApi.type";
import { CancelTokenSource } from "axios";
import { InterestReturnType } from "./getInterestGroupData.type";

export type GetInterestGroupDataPropsType = {
  page: number;
  size: number;
  cancelToken?: CancelTokenSource;
};

async function getInterestGroupData({
  page,
  size,
  cancelToken,
}: GetInterestGroupDataPropsType): AxiosReturn<InterestReturnType> {
  try {
    const response = await client.get<InterestReturnType>(
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
