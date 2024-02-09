import { ReactNode, useContext } from "react";
import { TimeStampContext, TimeStampContextType } from "./DateTimeContext";
import useTime from "../hook/useTime";
import { GlobalTimeType } from "../constraint/TIMEZONE_DATA";

type TimeStampProviderPropsType = {
  timezoneData: GlobalTimeType;
  children: ReactNode;
};

export const useDateTimeContext = () =>
  useContext<TimeStampContextType>(TimeStampContext);

export const TimeStampProvider = ({
  timezoneData,
  children,
}: TimeStampProviderPropsType) => {
  const { timeStamp } = useTime({ timezoneData: timezoneData.timeZone });

  return (
    <TimeStampContext.Provider value={{ timeStamp, timezone:timezoneData }}>
      {children}
    </TimeStampContext.Provider>
  );
};
