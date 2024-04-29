import { GlobalTimePageableType } from "../GlobalTimeService.type";

export type InterestReturnType = GlobalTimePageableType<InterestDataType>;

export interface InterestDataType {
  id: string;
  city_id: string;
  city_name: string;
  country_name: string;
  timezone_name: string;
  region_name: string;
  continent_name: string;
  highlighted: boolean;
}
