import { createContext } from "react";
import { GlobalTimeType } from "../constraint/TIMEZONE_DATA";

export type TimeStampContextType = {
  timeStamp: string | null;
  timezone: GlobalTimeType | null;
};

export const TimeStampContext = createContext<TimeStampContextType>({
  timeStamp: null,
  timezone: null,
});
