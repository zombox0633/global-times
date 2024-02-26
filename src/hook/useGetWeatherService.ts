import { useCallback, useEffect, useState } from "react";
import getWeatherService from "../service/getWeatherService";
import { WeatherType } from "../service/getWeatherService.type";

type UseGetWeatherServicePropsType = {
  city: string;
};

function useGetWeatherService({ city }: UseGetWeatherServicePropsType) {
  const [weatherData, setWeatherData] = useState<WeatherType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const [data, error] = await getWeatherService({ city });
      if (error) {
        setError(error);
        return;
      }

      setWeatherData(data);
    } catch (error) {
      setError(error as string);
      return;
    }
  }, [city]);

  useEffect(() => {
    fetchData();
  }, [fetchData, city]);

  return { weatherData, error };
}

export default useGetWeatherService;

/*
  1 วินาที 1000
  1 นาที 60,000 (1000 * 60)
  1 ชั่วโมง 3,600,000 (60,000 * 60)
  3 ชั่วโมง 10,800,000 (3,600,000 * 3)

*/
