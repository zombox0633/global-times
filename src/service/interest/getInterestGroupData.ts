import { AxiosReturn } from "../../config/serviceApi.type";
import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/serviceApi";
import { InterestGroupType } from "./getInterestGroupData.type";

export type GetInterestGroupDataPropsType = {
  page: number;
  size: number;
};

async function getInterestGroupData({
  page,
  size,
}: GetInterestGroupDataPropsType): AxiosReturn<InterestGroupType> {
  try {
    const response = await client.get<InterestGroupType>(
      `/v1/interest-group/data?id=ad599766-362e-480f-a1d6-23830980307f&page=${page}&size=${size}`,
      {
        withCredentials: true,
      },
    );

    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getInterestGroupData;
