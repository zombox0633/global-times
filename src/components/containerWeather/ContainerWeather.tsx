import { useEffect } from "react";
import BoxHumidity from "./BoxHumidity";
import BoxPressure from "./BoxPressure";
import BoxTemperature from "./BoxTemperature";
import BoxWeather from "./BoxWeather";
import BoxWind from "./BoxWind";
import { useDateTimeContext } from "../../context/dateTime/DateTimeContext";
import { useWeatherContext } from "../../context/weather/WeatherContext";

function ContainerWeather() {
  const { timezone } = useDateTimeContext();
  const { addCity } = useWeatherContext();
  const cityData = timezone?.city;

  useEffect(() => {
    if (cityData) {
      addCity(cityData);
    }
  }, [cityData, addCity]);

  return (
    <div className=" flex items-center justify-between h-full w-full pr-20">
      <BoxWeather />
      <BoxTemperature />
      <BoxHumidity />
      <BoxPressure />
      <BoxWind />
    </div>
  );
}

export default ContainerWeather;
