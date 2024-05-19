import { useEffect, useState } from "react";

type UseTimePropsType = {
  timezoneName: string;
};

function useTime({ timezoneName }: UseTimePropsType) {
  const [timeStamp, setTimeStamp] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const localTime = new Date().toLocaleString("en-US", {
        timeZone: timezoneName,
      });
      const currentDate = new Date(localTime).toISOString();
      setTimeStamp(currentDate);
    }, 1000);

    return () => clearInterval(timer);
  }, [timezoneName]);

  return {
    timeStamp,
  };
}

export default useTime;
