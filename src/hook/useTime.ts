import { useEffect, useState } from "react";
import { TimezoneDataPropsTypes } from "../components/homePage/BoxCountryDateTime";

function useTime({ timezoneData }: TimezoneDataPropsTypes) {
  const [timeStamp, setTimeStamp] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const localTime = new Date().toLocaleString("en-US", {
        timeZone: timezoneData.timezone_name,
      });
      const currentDate = new Date(localTime).toISOString();
      setTimeStamp(currentDate);
    }, 1000);

    return () => clearInterval(timer);
  }, [timezoneData.timezone_name]);

  return {
    timeStamp,
  };
}

export default useTime;
