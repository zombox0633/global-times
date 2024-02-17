import { memo } from "react";
import dayjs from "dayjs";
import DisplayDate from "./DisplayDate";
import DisplayLocation from "./DisplayLocation";
import DisplayTemperature from "./DisplayTemperature";
import DisplayTime from "./DisplayTime";

import useTime from "../../hook/useTime";
import { BoxCountryDateTimePropsTypes } from "./BoxCountryDateTime.type";
import { NavLink } from "react-router-dom";

function BoxCountryDateTime({ timezoneData }: BoxCountryDateTimePropsTypes) {
  const { timeStamp } = useTime({ timezoneData });
  const cityName = timezoneData.city.toLowerCase();

  const countryPath = `country/${cityName.toLowerCase()}`;
  const formattedDate = timeStamp ? dayjs(timeStamp).format("DD/MM/YYYY") : "";

  return (
    <div className=" relative w-64 2xl:w-72 2xl:h-48 rounded-3xl py-5 px-8 bg-night overflow-hidden shadow-xl">
      <NavLink to={countryPath} className="box_date_time__link">
        <DisplayTemperature city={cityName} />
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
