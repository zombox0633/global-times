import { useCallback, useMemo, useRef, useState } from "react";
import { ContextProviderPropsType } from "../context.type";
import { WeatherContext } from "./WeatherContext";
import getWeatherService from "../../api/getWeatherService";
import { WeatherType } from "../../api/getWeatherService.type";

export const WeatherProvider = ({ children }: ContextProviderPropsType) => {
  const [weatherRecords, setWeatherRecords] = useState<WeatherType[]>([]);
  const requestedCitiesRef = useRef(new Set<string>());

  const addCity = useCallback(
    async (cityName: string) => {
      const cityNameLowerCase = cityName.toLowerCase();
      if (!requestedCitiesRef.current.has(cityNameLowerCase)) {
        requestedCitiesRef.current.add(cityNameLowerCase);

        const [data, error] = await getWeatherService({
          city: cityNameLowerCase,
        });
        if (!error && data) {
          setWeatherRecords((prevRecords) => [...prevRecords, data]);
        }
      }
    },
    [requestedCitiesRef]
  );

  const value = useMemo(
    () => ({
      weatherRecords,
      addCity,
    }),
    [weatherRecords, addCity]
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
