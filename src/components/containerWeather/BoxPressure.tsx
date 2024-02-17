import { useDateTimeContext } from "../../context/dateTime/DateTimeContext";
import { useWeatherContext } from "../../context/weather/WeatherContext";
import useBoxPressure from "../../hook/useBoxPressure";

function BoxPressure() {
  const { timezone } = useDateTimeContext();
  const { weatherRecords } = useWeatherContext();

  console.log(weatherRecords);
  
  const cityData: string = timezone?.city ?? "";
  const cityWeather = weatherRecords.find((item) => item.name === cityData);
  const pressureData = cityWeather?.main.pressure ?? 0;

  const pressureValue = useBoxPressure({ pressureData });

  return (
    <div
      className={`flex flex-col justify-between w-40 h-36 p-4 rounded-2xl ${pressureValue.color} shadow-xl`}
    >
      <p className="text-2xl">Pressure</p>
      <div>
        <p className="text-3xl text-end">{pressureData.toFixed(0)}hPa</p>
        <p className="text-end">{pressureValue.status}</p>
      </div>
    </div>
  );
}

export default BoxPressure;
