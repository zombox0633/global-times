import { useState } from "react";
import { TimeStampContext } from "./DateTimeContext";
import useTime from "../../hook/useTime";
import { GlobalTimeType } from "../../constraint/TIMEZONE_DATA";
import { ContextProviderPropsType } from "../context.type";

export const TimeStampProvider = ({ children }: ContextProviderPropsType) => {
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
