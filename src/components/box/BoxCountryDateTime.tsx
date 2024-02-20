import { memo, useEffect } from "react";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import DisplayDate from "./DisplayDate";
import DisplayLocation from "./DisplayLocation";
import DisplayTemperature from "./DisplayTemperature";
import DisplayTime from "./DisplayTime";

import { useWeatherContext } from "../../context/weather/WeatherContext";
import useTemperatureColor from "../../hook/useTemperatureColor";
import useTime from "../../hook/useTime";
import { BoxCountryDateTimePropsTypes } from "./BoxCountryDateTime.type";

function BoxCountryDateTime({ timezoneData }: BoxCountryDateTimePropsTypes) {
  const { timeStamp } = useTime({ timezoneData });
  const { weatherRecords, addCity } = useWeatherContext();

  const cityName = timezoneData.city.toLowerCase();

  useEffect(() => {
    if (cityName) {
      addCity(cityName);
    }
  }, [cityName, addCity]);

  //DisplayTemperature
  const cityWeather = weatherRecords.find(
    (item) => item.name.toLowerCase() === cityName
  );
  const tempData = cityWeather?.main.temp ?? 0;
  const tempColor = useTemperatureColor({ tempData });

  //NavLink
  const countryPath = `country/${timezoneData.country.toLowerCase()}`;

  //DisplayDate
  const formattedDate = timeStamp ? dayjs(timeStamp).format("DD/MM/YYYY") : "";

  return (
    <div className=" relative w-64 2xl:w-72 2xl:h-48 rounded-3xl py-5 px-8 bg-night overflow-hidden shadow-xl">
      <NavLink to={countryPath} className="box_date_time__link">
        <DisplayTemperature tempData={tempData} tempColor={tempColor} />
        <div className="relative flex flex-col justify-between h-full z-20">
          <DisplayLocation timezoneData={timezoneData} />
          <div>
            <DisplayTime timeStamp={timeStamp} />
            <DisplayDate formattedDate={formattedDate} />
          </div>
        </div>
      </NavLink>
    </div>
  );
}

const MemoBoxCountryDateTime = memo(BoxCountryDateTime);

export default MemoBoxCountryDateTime;
