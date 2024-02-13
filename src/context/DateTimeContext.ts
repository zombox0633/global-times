import { createContext } from "react";
import { GlobalTimeType } from "../constraint/TIMEZONE_DATA";

export type TimeStampContextType = {
  timeStamp: string | null;
  timezone: GlobalTimeType | null;
  setTimezone: React.Dispatch<React.SetStateAction<GlobalTimeType>>;
};

export const TimeStampContext = createContext<TimeStampContextType>({
  timeStamp: null,
  timezone: null,
  setTimezone: () => {},
});
