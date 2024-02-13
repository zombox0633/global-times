import { useEffect, useState } from "react";
import { GlobalTimeType } from "../constraint/TIMEZONE_DATA";

export type UseTimePropsType = {
  timezoneData: GlobalTimeType;
};

function useTime({ timezoneData }: UseTimePropsType) {
  const [timeStamp, setTimeStamp] = useState<string>("");

  const formattedTimeZone = `${timezoneData.continent}/${timezoneData.city}`.replaceAll(" ","_");

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
