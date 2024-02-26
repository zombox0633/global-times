import { useTimeStampContext } from "../../context/dateTime/TimeStampContext";
import { useWeatherContext } from "../../context/weather/WeatherContext";
import BoxHumidity from "./BoxHumidity";
import BoxPressure from "./BoxPressure";
import BoxTemperature from "./BoxTemperature";
import BoxWeather from "./BoxWeather";
import BoxWind from "./BoxWind";
import useBoxWeather from "../../hook/useBoxWeather";
import useCalculateEnvironment from "../../hook/useCalculateEnvironment";

function DisplayWeather() {
  const { timezone } = useTimeStampContext();
  const { weatherRecords } = useWeatherContext();
  const cityName = timezone?.city;
  const cityWeather = weatherRecords.find((item) => item.name === cityName);

  //BoxWeather
  const weatherData = cityWeather?.weather[0].description ?? "";
  const weatherValue = useBoxWeather({
    weatherData,
  });

  //BoxTemperature
  const tempData = cityWeather?.main.temp ?? 0;
  const minTemp = cityWeather?.main.temp_min.toFixed(1);
  const maxTemp = cityWeather?.main.temp_max.toFixed(1);
  const tempColor = useCalculateEnvironment({ type: "temperature", data: tempData });

  //BoxHumidity
  const humidityData = cityWeather?.main.humidity ?? 0;
  const humidityValue = useCalculateEnvironment({ type: "humidity", data: humidityData });

  //BoxPressure
  const pressureData = cityWeather?.main.pressure ?? 0;
  const pressureValue = useCalculateEnvironment({ type: "pressure", data: pressureData });

  //BoxWind
  const windData = cityWeather?.wind.speed ?? 0;
  const windSpeedKmH = windData * 3.6;
  const windValue = useCalculateEnvironment({ type: "wind", data: windSpeedKmH });

  tempColor.color;
  return (
    <div className=' flex h-full w-full items-center sm:justify-between md:max-w-[40rem] lg:max-w-[48rem] xl:max-w-[60rem]'>
      <BoxWeather weatherValue={weatherValue} weatherData={weatherData} />
      <BoxTemperature
        temperatureData={{
          tempData,
          minTemp,
          maxTemp,
          tempColor: tempColor.color,
        }}
      />
      <BoxHumidity humidity={{ humidityData, humidityValue }} />
      <BoxPressure pressure={{ pressureData, pressureValue }} />
      <BoxWind
        windValue={{ windSpeed: windSpeedKmH, status: windValue.status, color: windValue.color }}
      />
    </div>
  );
}

export default DisplayWeather;
