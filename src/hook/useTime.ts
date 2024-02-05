import { useEffect, useState } from "react";

type useTimeType = {
  timezoneData: string;
};

function useTime({ timezoneData }: useTimeType) {
  const [timeNow, setTimeNow] = useState<string>("");
  const [AMPM, setAMPM] = useState<boolean>(false);
  const [dateNow, setDateNow] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const localTime = new Date().toLocaleString("en-US", {
        timeZone: timezoneData,
      });
      const currentDate = new Date(localTime);
      
      //time
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const second = currentDate.getSeconds();
      const ampm = hours >= 12 ? true : false;
      const formattedHours = (((hours + 11) % 12) + 1)
        .toString()
        .padStart(2, "0");
      const formattedMinutes = minutes.toString().padStart(2, "0");
      const formattedSecond = second.toString().padStart(2, "0");

      //date
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      setTimeNow(`${formattedHours}:${formattedMinutes}:${formattedSecond}`);
      setAMPM(ampm);
      setDateNow(`${day}/${month}/${year}`);
    }, 1000);

    return () => clearInterval(timer);
  }, [timezoneData]);

  return {
    timeNow,
    AMPM,
    dateNow,
  };
}

export default useTime;
