import { useCallback, useMemo, useState } from "react";
import { ContextProviderPropsType } from "../context.type";
import { WeatherContext } from "./WeatherContext";
import getWeatherService from "../../service/weather/getWeatherService";
import { WeatherType } from "../../service/weather/getWeatherService.type";

export const WeatherProvider = ({ children }: ContextProviderPropsType) => {
  const [weatherRecords, setWeatherRecords] = useState<WeatherType[]>([]);
  // const requestedCitiesRef = useRef(new Set<string>());

  const addCity = useCallback(
    async (cityName: string) => {
      const cityNameLowerCase = cityName.toLowerCase();
      const requestedCities = weatherRecords.some((item) => item.name === cityName);
      if (!requestedCities) {
        // requestedCitiesRef.current.add(cityNameLowerCase);

        const [data, error] = await getWeatherService({
          city: cityNameLowerCase,
        });
        if (!error && data) {
          setWeatherRecords((prevRecords) => [...prevRecords, data]);
        }
      }
    },
    [weatherRecords],
  );

  const value = useMemo(
    () => ({
      weatherRecords,
      addCity,
    }),
    [weatherRecords, addCity],
  );

  return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
};
