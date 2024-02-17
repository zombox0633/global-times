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
      className={`flex flex-col justify-between w-40 h-36 p-4 rounded-2xl ${humidityValue.color} shadow-xl`}
    >
      <p className="text-2xl">Humidity</p>
      <div>
        <p className=" text-3xl text-end">{humidityData.toFixed(0)}&#37;</p>
        <p className=" text-sm text-end">{humidityValue.status}</p>
      </div>
    </div>
  );
}

export default BoxHumidity;
