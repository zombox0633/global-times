import { useDateTimeContext } from "../../context/dateTime/DateTimeContext";
import { useWeatherContext } from "../../context/weather/WeatherContext";
import useBoxHumidity from "../../hook/useBoxHumidity";

function BoxHumidity() {
  const { timezone } = useDateTimeContext();
  const { weatherRecords } = useWeatherContext();
  
  const cityData: string = timezone?.city ?? "";
  
  const cityWeather = weatherRecords.find((item) => item.name === cityData);
  const humidityData = cityWeather?.main.humidity ?? 0;
  
  const humidityValue =  useBoxHumidity({ humidityData });

  return (
    <div
      className={`${humidityValue.color} box__weather_df box__weather_flex`}
    >
      <p className="box__weather_head">Humidity</p>
      <div>
        <p className="box__weather_result">{humidityData.toFixed(0)}&#37;</p>
        <p className="box__weather_sub_result">{humidityValue.status}</p>
      </div>
    </div>
  );
}

export default BoxHumidity;
