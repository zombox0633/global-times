import useTemperatureColor from "../../hook/useTemperatureColor";
import { useWeatherContext } from "../../context/weather/WeatherContext";
import { useDateTimeContext } from "../../context/dateTime/DateTimeContext";

function BoxTemperature() {
  const { timezone } = useDateTimeContext();
  const { weatherRecords } = useWeatherContext();

  const cityData: string = timezone?.city ?? "";
  const cityWeather = weatherRecords.find((item) => item.name === cityData);
  const tempData = cityWeather?.main.temp ?? 0;
  const minTemp = cityWeather?.main.temp_min.toFixed(2);
  const maxTemp = cityWeather?.main.temp_max.toFixed(2);

  const tempColor = useTemperatureColor({ tempData });

  return (
    <div
      className={`flex flex-col justify-between w-40 h-36 p-4 rounded-2xl ${tempColor} shadow-xl`}
    >
      <p className="text-2xl">Temperature</p>
      <div>
        <p className=" text-3xl text-end">{tempData.toFixed(2)}&deg;C</p>
        <p className=" text-sm text-end">
          {minTemp}&deg;C - {maxTemp}&deg;C
        </p>
      </div>
    </div>
  );
}

export default BoxTemperature;
