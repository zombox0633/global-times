import { useDateTimeContext } from "../../context/dateTime/DateTimeContext";
import { useWeatherContext } from "../../context/weather/WeatherContext";
import useBoxWeather from "../../hook/useBoxWeather";

function BoxWeather() {
  const { timezone } = useDateTimeContext();
  const { weatherRecords } = useWeatherContext();

  const cityData: string = timezone?.city ?? "";
  const cityWeather = weatherRecords.find((item) => item.name === cityData);
  const weatherData = cityWeather?.weather[0].description ?? "";

  const weatherValue = useBoxWeather({ weatherData });

  return (
    <div className="box__weather_df bg-black">
      <div className=" flex flex-col w-28 lg:w-36 2xl:w-40 h-36 justify-between p-4 "> 
        <p className="box__weather_head z-50">Weather</p>
        <p className="box__weather_result z-50">{weatherData}</p>
      </div>
      <div
        className={`absolute inset-0 w-full h-full ${weatherValue.color} opacity-80 z-10`}
      />
      <div className=" absolute top-1 right-1">
        <span className="material-symbols-outlined text-8xl ">
          {weatherValue.icon}
        </span>
      </div>
    </div>
  );
}

export default BoxWeather;
