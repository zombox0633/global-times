import { GlobalTimePageableType } from "../GlobalTimeService.type";

export type GetContinentReturnDataType = GlobalTimePageableType<GetContinentDataType>;

export type GetContinentDataType = {
  id: string;
  country_id: string;
  continent_name: string;
  region_name: string;
  country_name: string;
};
