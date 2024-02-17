import { useEffect, useState } from "react";

type UseBoxWeatherPropsType = {
  weatherData: string;
};

type UseBoxWeatherType = {
  icon: string;
  color: string;
};

function useBoxWeather({
  weatherData,
}: UseBoxWeatherPropsType): UseBoxWeatherType {
  const [weatherValue, setWeatherValue] = useState<UseBoxWeatherType>({
    icon: "",
    color: "",
  });

  useEffect(() => {
    let icon = "";
    let color = "";

    switch (weatherData) {
      case "clear sky":
        icon = "clear_day";
        color = "bg-[#88C4EC]";
        break;
      case "few clouds":
        icon = "partly_cloudy_day";
        color = "bg-[#74b9ff]";
        break;
      case "scattered clouds":
        icon = "cloud";
        color = "bg-[#50AFE4]";
        break;
      case "broken clouds":
        icon = "cloud";
        color = "bg-[#4F84C6]";
        break;
      case "overcast clouds":
        icon = "cloud";
        color = "bg-[#3D89B1]";
        break;
      case "shower rain":
        icon = "rainy";
        color = "bg-[#35637D]";
        break;
      case "rain":
        icon = "rainy";
        color = "bg-[#4E6881]";
        break;
      case "thunderstorm":
        icon = "thunderstorm";
        color = "bg-[#3C5369]";
        break;
      case "snow":
        icon = "ac_unit";
        color = "bg-[#88ABFF]";
        break;
      case "mist":
        icon = "mist";
        color = "bg-[#7C959D]";
        break;
      case "dust":
        icon = "mist";
        color = "bg-[#B2996E]";
        break;
      case "fog":
        icon = "foggy";
        color = "bg-[#A5C0C2]";
        break;
      default:
        icon = "";
        color = "bg-transparent";
        break;
    }

    setWeatherValue({ icon, color });
  }, [weatherData]);

  return weatherValue;
}

export default useBoxWeather;
