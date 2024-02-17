import { useDateTimeContext } from "../../context/dateTime/DateTimeContext";
import { useWeatherContext } from "../../context/weather/WeatherContext";
import useBoxWind from "../../hook/useBoxWind";

function BoxWind() {
  const { timezone } = useDateTimeContext();
  const { weatherRecords } = useWeatherContext();

  const cityData: string = timezone?.city ?? " ";
  const cityWeather = weatherRecords.find((item) => item.name === cityData);
  const windData = cityWeather?.wind.speed ?? 0;

  const windValue = useBoxWind({ windData });
  return (
    <div
      className={`flex flex-col justify-between w-40 h-36 p-4 rounded-2xl ${windValue.color} shadow-xl`}
    >
      <p className="text-2xl">Wind</p>
      <div>
        <p className=" text-3xl text-end">
          {windValue.windSpeed.toFixed(2)}km/h
        </p>
        <p className="text-end">{windValue.status}</p>
      </div>
    </div>
  );
}

export default BoxWind;
