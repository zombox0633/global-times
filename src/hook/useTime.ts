import { useEffect, useMemo, useState } from "react";
import { GlobalTimeType } from "../constraint/TIMEZONE_DATA";

export type UseTimePropsType = {
  timezoneData: GlobalTimeType;
};

function useTime({ timezoneData }: UseTimePropsType) {
  const [timeStamp, setTimeStamp] = useState<string>("");

  const formattedTimeZone = useMemo(() => {
    const format = timezoneData.specialFormat ?? "DefaultFormat";
    switch (format) {
      case "CountryOnly":
        return `${timezoneData.continent}/${timezoneData.country}`.replaceAll(" ", "_");
      case "Full":
        return `${timezoneData.continent}/${timezoneData.country}/${timezoneData.city}`.replaceAll(
          " ",
          "_",
        );
      case "Hyphenated":
        return `${timezoneData.continent}/${timezoneData.country}`.replaceAll(" ", "-");
      default:
        return `${timezoneData.continent}/${timezoneData.city}`.replaceAll(" ", "_");
    }
  }, [timezoneData]);

  useEffect(() => {
    const timer = setInterval(() => {
      const localTime = new Date().toLocaleString("en-US", {
        timeZone: formattedTimeZone,
      });
      const currentDate = new Date(localTime).toISOString();
      setTimeStamp(currentDate);
    }, 1000);

    return () => clearInterval(timer);
  }, [formattedTimeZone]);

  return {
    timeStamp,
  };
}

export default useTime;
