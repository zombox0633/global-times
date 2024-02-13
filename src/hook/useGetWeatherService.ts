import { useCallback, useEffect, useState } from "react";
import getWeatherService from "../api/getWeatherService";
import { WeatherType } from "../api/getWeatherService.type";

type UseGetWeatherServicePropsType = {
  city: string;
};

function useGetWeatherService({ city }: UseGetWeatherServicePropsType) {
  const [weatherData, setWeatherData] = useState<WeatherType | null>(
    null
  );

  const fetchData = useCallback(async () => {
    try {
      const [data, error] = await getWeatherService({ city });
      if (error) {
        console.error(error);
      }

      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  }, [city]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 10800000);

    fetchData();

    return () => clearInterval(intervalId);
  }, [fetchData]);

  return { weatherData };
}

export default useGetWeatherService;

/*
  1 วินาที 1000
  1 นาที 60,000 (1000 * 60)
  1 ชั่วโมง 3,600,000 (60,000 * 60)
  3 ชั่วโมง 10,800,000 (3,600,000 * 3)

*/
