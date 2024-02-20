import { useCallback, useMemo, useState } from "react";
import { TimeStampContext } from "./TimeStampContext";
import useTime from "../../hook/useTime";
import { GlobalTimeType, timezoneData } from "../../constraint/TIMEZONE_DATA";
import { ContextProviderPropsType } from "../context.type";

export const TimeStampProvider = ({ children }: ContextProviderPropsType) => {
  const [timezone, setTimezone] = useState<GlobalTimeType>({
    country: "Thailand",
    city: "Bangkok",
    continent: "Asia",
  });

  const { timeStamp } = useTime({ timezoneData: timezone });

  const findTimezone = useCallback(
    (countryPath: string) => {
      const foundTimezone = timezoneData.find((timezone) => {
        return (
          timezone.country.toLowerCase() === countryPath.toLowerCase() ||
          timezone.city.toLowerCase() === countryPath.toLowerCase()
        );
      });

      if (foundTimezone) {
        setTimezone(foundTimezone);
      }
    },
    [setTimezone]
  );

  const value = useMemo(
    () => ({
      timezone,
      timeStamp,
      findTimezone,
    }),
    [timezone, timeStamp, findTimezone]
  );

  return (
    <TimeStampContext.Provider value={value}>
      {children}
    </TimeStampContext.Provider>
  );
};
