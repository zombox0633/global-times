import { GlobalTimePageableType } from "../GlobalTimeService.type";

export type GetCityWithSearchDataType = {
  id: string;
  timezoneId: string;
  name: string;
  highlighted: boolean;
  createTimestamp: string;
  lastUpdatedTimestamp: string;
  lastOpId: string;
};

export type GetCityWithSearchReturnDataType = GlobalTimePageableType<GetCityWithSearchDataType>;
