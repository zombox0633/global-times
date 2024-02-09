import { useEffect, useState } from "react";

export type UseTimePopsType = {
  timezoneData: string;
};

function useTime({ timezoneData }: UseTimePopsType) {
  const [timeStamp, setTimeStamp] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const localTime = new Date().toLocaleString("en-US", {
        timeZone: timezoneData,
      });
      const currentDate = new Date(localTime).toISOString();
      setTimeStamp(currentDate);
    }, 1000);

    return () => clearInterval(timer);
  }, [timezoneData]);

  return {
    timeStamp,
  };
}

export default useTime;
