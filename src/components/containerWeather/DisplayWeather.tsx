import BoxHumidity from "./BoxHumidity";
import BoxPressure from "./BoxPressure";
import BoxTemperature from "./BoxTemperature";
import BoxWeather from "./BoxWeather";
import BoxWind from "./BoxWind";
import { useTimeStampContext } from "../../context/dateTime/TimeStampContext";
import { useWeatherContext } from "../../context/weather/WeatherContext";
import useBoxWind from "../../hook/useBoxWind";
import useBoxWeather from "../../hook/useBoxWeather";
import useTemperatureColor from "../../hook/useTemperatureColor";
import useBoxHumidity from "../../hook/useBoxHumidity";
import useBoxPressure from "../../hook/useBoxPressure";

function DisplayWeather() {
  const { timezone } = useTimeStampContext();
  const { weatherRecords } = useWeatherContext();
  const cityName = timezone?.city;
  const cityWeather = weatherRecords.find((item) => item.name === cityName);
  console.log(weatherRecords);
  
  //BoxWeather
  const weatherData = cityWeather?.weather[0].description ?? "";
  const weatherValue = useBoxWeather({ weatherData });

  //BoxTemperature
  const tempData = cityWeather?.main.temp ?? 0;
  const minTemp = cityWeather?.main.temp_min.toFixed(1);
  const maxTemp = cityWeather?.main.temp_max.toFixed(1);
  const tempColor = useTemperatureColor({ tempData });

  //BoxHumidity
  const humidityData = cityWeather?.main.humidity ?? 0;
  const humidityValue = useBoxHumidity({ humidityData });

  //BoxPressure
  const pressureData = cityWeather?.main.pressure ?? 0;
  const pressureValue = useBoxPressure({ pressureData });

  //BoxWind
  const windData = cityWeather?.wind.speed ?? 0;
  const windValue = useBoxWind({ windData });

  return (
    <div className=" flex items-center sm:justify-between w-full md:max-w-[40rem] lg:max-w-[48rem] xl:max-w-[60rem] h-full">
      <BoxWeather weatherValue={weatherValue} weatherData={weatherData} />
      <BoxTemperature
        temperatureData={{ tempData, minTemp, maxTemp, tempColor }}
      />
      <BoxHumidity humidity={{ humidityData, humidityValue }} />
      <BoxPressure pressure={{ pressureData, pressureValue }} />
      <BoxWind windValue={windValue} />
    </div>
  );
}

export default DisplayWeather;
