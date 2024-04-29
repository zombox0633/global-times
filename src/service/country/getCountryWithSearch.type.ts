import { GlobalTimePageableType } from "../GlobalTimeService.type";

export type GetCountryWithSearchDataType = {
  id: string;
  continentId: string;
  name: string;
  createTimestamp: string;
  lastUpdatedTimestamp: string;
  lastOpId: string;
};

export type GetCountryWithSearchReturnDataType =
  GlobalTimePageableType<GetCountryWithSearchDataType>;
