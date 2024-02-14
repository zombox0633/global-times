import React, { useEffect } from "react";
import { GlobalTimeType, timezoneData } from "../constraint/TIMEZONE_DATA";

type UseFindTimezoneType = {
  countryPath: string | undefined;
  setTimezone: React.Dispatch<React.SetStateAction<GlobalTimeType>>;
};

function useFindTimezone({ countryPath, setTimezone }: UseFindTimezoneType) {
  useEffect(() => {
    if (countryPath) {
      const foundTimezone = timezoneData.find((timezone) => {
        return (
          timezone.country.toLowerCase() === countryPath.toLowerCase() ||
          timezone.city.toLowerCase() === countryPath.toLowerCase()
        );
      });

      if (foundTimezone) {
        setTimezone(foundTimezone);
      }
    }
  }, [countryPath, setTimezone]);
}

export default useFindTimezone;
