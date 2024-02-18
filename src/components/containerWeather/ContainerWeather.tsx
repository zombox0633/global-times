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
  const cityName = timezone?.city;

  useEffect(() => {
    if (cityName) {
      addCity(cityName);
    }
  }, [cityName, addCity]);

  return (
    <div className=" flex items-center sm:justify-between w-full md:max-w-[40rem] lg:max-w-[48rem] xl:max-w-[60rem] h-full">
      <BoxWeather />
      <BoxTemperature />
      <BoxHumidity />
      <BoxPressure />
      <BoxWind />
    </div>
  );
}

export default ContainerWeather;
