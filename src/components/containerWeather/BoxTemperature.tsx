import useTemperatureColor from "../../hook/useTemperatureColor";
import { useWeatherContext } from "../../context/weather/WeatherContext";
import { useDateTimeContext } from "../../context/dateTime/DateTimeContext";

function BoxTemperature() {
  const { timezone } = useDateTimeContext();
  const { weatherRecords } = useWeatherContext();

  const cityData: string = timezone?.city ?? "";
  const cityWeather = weatherRecords.find((item) => item.name === cityData);
  const tempData = cityWeather?.main.temp ?? 0;
  const minTemp = cityWeather?.main.temp_min.toFixed(1);
  const maxTemp = cityWeather?.main.temp_max.toFixed(1);

  const tempColor = useTemperatureColor({ tempData });

  return (
    <div className={`${tempColor} box__weather_df box__weather_flex`}>
      <p className="box__weather_head">Temperature</p>
      <div>
        <p className="box__weather_result">{tempData.toFixed(1)}&deg;C</p>
        <p className="box__weather_sub_result">
          {minTemp}&deg;C - {maxTemp}&deg;C
        </p>
      </div>
    </div>
  );
}

export default BoxTemperature;
