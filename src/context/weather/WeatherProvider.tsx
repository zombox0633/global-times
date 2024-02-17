import { useCallback, useEffect, useRef, useState } from "react";
import { ContextProviderPropsType } from "../context.type";
import { WeatherContext } from "./WeatherContext";
import getWeatherService from "../../api/getWeatherService";
import { WeatherType } from "../../api/getWeatherService.type";

export const WeatherProvider = ({ children }: ContextProviderPropsType) => {
  const [weatherRecords, setWeatherRecords] = useState<WeatherType[]>([]);

  const weatherRecordsRef = useRef(weatherRecords);

  useEffect(() => {
    weatherRecordsRef.current = weatherRecords;
  }, [weatherRecords]);

  const addCity = useCallback(
    async (cityName: string) => {
      const existingRecordIndex = weatherRecordsRef.current.findIndex(
        (item) => item.name.toLowerCase() === cityName.toLowerCase()
      );
      if (existingRecordIndex === -1) {
        const [data, error] = await getWeatherService({ city: cityName });
        if (!error && data) {
          setWeatherRecords((prev) => [...prev, data]);
        }
      }
    },
    [weatherRecordsRef]
  );

  return (
    <WeatherContext.Provider value={{ weatherRecords, addCity }}>
      {children}
    </WeatherContext.Provider>
  );
};
