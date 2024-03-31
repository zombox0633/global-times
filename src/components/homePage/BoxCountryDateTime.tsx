import { memo, useEffect } from "react";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import DisplayDate from "./DisplayDate";
import DisplayLocation from "./DisplayLocation";
import DisplayTemperature from "./DisplayTemperature";
import DisplayTime from "./DisplayTime";
import TogglePinCountryButton from "../TogglePinCountryButton";

import { useWeatherContext } from "../../context/weather/WeatherContext";
import useTime from "../../hook/useTime";
import { formatForURL } from "../../helper/formatForURL";
import { BoxCountryDateTimePropsTypes } from "./BoxCountryDateTime.type";
import useCalculateEnvironment from "../../hook/useCalculateEnvironment";

function BoxCountryDateTime({ timezoneData }: BoxCountryDateTimePropsTypes) {
  const { timeStamp } = useTime({ timezoneData });
  const { weatherRecords, addCity } = useWeatherContext();

  const cityName = timezoneData.city.toLowerCase();

  useEffect(() => {
    if (cityName) {
      addCity(cityName);
    }
  }, [cityName]);

  DisplayTemperature;
  const cityWeather = weatherRecords.find((item) => item.name.toLowerCase() === cityName);
  const tempData = cityWeather?.main.temp ?? 0;
  const tempColor = useCalculateEnvironment({ type: "temperature", data: tempData });

  //NavLink
  const countryPath = formatForURL(timezoneData.country);
  const path = `country/${countryPath}`;

  //DisplayDate
  const formattedDate = timeStamp ? dayjs(timeStamp).format("DD/MM/YYYY") : "";

  return (
    <div className=' relative w-64 overflow-hidden rounded-3xl bg-night px-8 py-5 shadow-xl 2xl:h-48 2xl:w-72'>
      <NavLink
        to={path}
        aria-label={`View details of the time period and related information of ${countryPath}`}
        className='box_date_time__link'
      >
        <DisplayTemperature tempData={tempData} tempColor={tempColor.color} />
        <div className='relative z-20 flex h-full flex-col justify-between'>
          <DisplayLocation timezoneData={timezoneData} />
          <div>
            <DisplayTime timeStamp={timeStamp} />
            <DisplayDate formattedDate={formattedDate} />
          </div>
        </div>
      </NavLink>
      <div className='absolute -bottom-1 -right-1 z-20 flex h-20 w-24 items-center justify-center'>
        <TogglePinCountryButton countryName={countryPath} />
      </div>
    </div>
  );
}

const MemoBoxCountryDateTime = memo(BoxCountryDateTime);

export default MemoBoxCountryDateTime;
