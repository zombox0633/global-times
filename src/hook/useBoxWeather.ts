import { useMemo } from "react";
import { UseBoxWeatherType, weatherMapping } from "../constraint/weatherRanges/WEATHER_DATA";

type UseBoxWeatherPropsType = {
  weatherData: string;
};

function useBoxWeather({ weatherData }: UseBoxWeatherPropsType): UseBoxWeatherType {
  const weatherValue = useMemo(() => {
    const result = weatherMapping[weatherData] ?? {
      icon: "",
      color: "bg-black",
    };

    return result;
  }, [weatherData]);

  return weatherValue;
}

export default useBoxWeather;
