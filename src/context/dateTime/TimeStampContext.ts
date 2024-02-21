import { createContext, useContext } from "react";
import { GlobalTimeType } from "../../constraint/TIMEZONE_DATA";

export type TimeStampContextType = {
  timeStamp: string | null;
  timezone: GlobalTimeType | null;
  findTimezone: (countryPath: string) => void;
};

export const TimeStampContext = createContext<TimeStampContextType>({
  timeStamp: null,
  timezone: null,
  findTimezone: () => {},
});

export const useTimeStampContext = () => useContext<TimeStampContextType>(TimeStampContext);
