import { useDateTimeContext } from "../../context/dateTime/DateTimeContext";
import { useWeatherContext } from "../../context/weather/WeatherContext";
import useBoxWind from "../../hook/useBoxWind";

function BoxWind() {
  const { timezone } = useDateTimeContext();
  const { weatherRecords } = useWeatherContext();

  const cityData: string = timezone?.city ?? "";
  const cityWeather = weatherRecords.find((item) => item.name === cityData);
  const windData = cityWeather?.wind.speed ?? 0;

  const windValue = useBoxWind({ windData });
  return (
    <div
      className={`${windValue.color} box__weather_df box__weather_flex`}
    >
      <p className="text-box__weather_head">Wind</p>
      <div>
        <p className="box__weather_result">
          {windValue.windSpeed.toFixed(1)}km/h
        </p>
        <p className="box__weather_sub_result">{windValue.status}</p>
      </div>
    </div>
  );
}

export default BoxWind;
