import { useMemo } from "react";

type UseBoxWeatherPropsType = {
  weatherData: string;
};

export type UseBoxWeatherType = {
  icon: string;
  color: string;
};

function useBoxWeather({ weatherData }: UseBoxWeatherPropsType): UseBoxWeatherType {
  const weatherValue = useMemo(() => {
    const weatherMapping: {
      [key: string]: UseBoxWeatherType;
    } = {
      "clear sky": {
        icon: "clear_day",
        color: "bg-[#88C4EC]",
      },
      "few clouds": {
        icon: "partly_cloudy_day",
        color: "bg-[#74b9ff]",
      },
      "scattered clouds": {
        icon: "cloud",
        color: "bg-[#50AFE4]",
      },
      "broken clouds": {
        icon: "cloud",
        color: "bg-[#4F84C6]",
      },
      "overcast clouds": {
        icon: "cloud",
        color: "bg-[#3D89B1]",
      },
      "shower rain": {
        icon: "rainy",
        color: "bg-[#35637D]",
      },
      rain: {
        icon: "rainy",
        color: "bg-[#4E6881]",
      },
      "moderate rain": {
        icon: "rainy",
        color: "bg-[#4E6881]",
      },
      thunderstorm: {
        icon: "thunderstorm",
        color: "bg-[#3C5369]",
      },
      snow: {
        icon: "ac_unit",
        color: "bg-[#88ABFF]",
      },
      mist: {
        icon: "mist",
        color: "bg-[#7C959D]",
      },
      dust: {
        icon: "mist",
        color: "bg-[#B2996E]",
      },
      haze: {
        icon: "mist",
        color: "bg-[#B2996E]",
      },
      fog: {
        icon: "foggy",
        color: "bg-[#A5C0C2]",
      },
    };

    const result = weatherMapping[weatherData] ?? {
      icon: "",
      color: "bg-black",
    };

    return result;
  }, [weatherData]);

  return weatherValue;
}

export default useBoxWeather;
