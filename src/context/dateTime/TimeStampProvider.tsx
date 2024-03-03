import { useCallback, useMemo, useState } from "react";
import { TimeStampContext } from "./TimeStampContext";
import useTime from "../../hook/useTime";
import { GlobalTimeType, timezoneData } from "../../constraint/TIMEZONE_DATA";
import { ContextProviderPropsType } from "../context.type";
import { slugToText } from "../../helper/formatForURL";
import { useNavigate } from "react-router-dom";

export const TimeStampProvider = ({ children }: ContextProviderPropsType) => {
  const navigate = useNavigate();

  const [timezone, setTimezone] = useState<GlobalTimeType>({
    country: "Thailand",
    city: "Bangkok",
    continent: "Asia",
    highlighted: true,
  });

  const { timeStamp } = useTime({
    timezoneData: timezone,
  });

  const findTimezone = useCallback(
    (countryPath: string) => {
      const foundTimezone = timezoneData.find((timezone) => {
        const searchText = slugToText(countryPath);
        return (
          timezone.country.toLowerCase() === searchText ||
          timezone.city.toLowerCase() === searchText
        );
      });

      if (foundTimezone) {
        setTimezone(foundTimezone);
      } else {
        navigate("*");
      }
    },
    [setTimezone],
  );

  const value = useMemo(
    () => ({
      timezone,
      timeStamp,
      findTimezone,
    }),
    [timezone, timeStamp, findTimezone],
  );

  return <TimeStampContext.Provider value={value}>{children}</TimeStampContext.Provider>;
};
