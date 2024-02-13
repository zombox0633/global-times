import { ReactNode, useContext, useState } from "react";
import { TimeStampContext, TimeStampContextType } from "./DateTimeContext";
import useTime from "../hook/useTime";
import { GlobalTimeType } from "../constraint/TIMEZONE_DATA";

type TimeStampProviderPropsType = {
  children: ReactNode;
};

export const useDateTimeContext = () =>
  useContext<TimeStampContextType>(TimeStampContext);

export const TimeStampProvider = ({ children }: TimeStampProviderPropsType) => {
  const [timezone, setTimezone] = useState<GlobalTimeType>({
    country: "Thailand",
    city: "Bangkok",
    continent: "Asia",
  });

  const { timeStamp } = useTime({ timezoneData: timezone });

  return (
    <TimeStampContext.Provider value={{ timeStamp, timezone, setTimezone }}>
      {children}
    </TimeStampContext.Provider>
  );
};
