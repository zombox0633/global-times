import { useDateTimeContext } from "../../context/dateTime/DateTimeContext";
import { useWeatherContext } from "../../context/weather/WeatherContext";
import useBoxPressure from "../../hook/useBoxPressure";

function BoxPressure() {
  const { timezone } = useDateTimeContext();
  const { weatherRecords } = useWeatherContext();
  
  const cityData: string = timezone?.city ?? "";
  const cityWeather = weatherRecords.find((item) => item.name === cityData);
  const pressureData = cityWeather?.main.pressure ?? 0;

  const pressureValue = useBoxPressure({ pressureData });

  return (
    <div
      className={`${pressureValue.color} box__weather_df box__weather_flex`}
    >
      <p className="box__weather_head">Pressure</p>
      <div>
        <p className="box__weather_result">{pressureData.toFixed(0)}hPa</p>
        <p className="box__weather_sub_result">{pressureValue.status}</p>
      </div>
    </div>
  );
}

export default BoxPressure;
