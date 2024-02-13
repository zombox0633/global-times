import { memo } from "react";
import dayjs from "dayjs";
import BoxDate from "./BoxDate";
import BoxLocation from "./BoxLocation";
import BoxTemperature from "./BoxTemperature";

import BoxTime from "./BoxTime";
import useTime from "../../hook/useTime";
import { BoxCountryDateTimePropsTypes } from "./BoxCountryDateTime.type";

function BoxCountryDateTime({ timezoneData }: BoxCountryDateTimePropsTypes) {
  const { timeStamp } = useTime({ timezoneData });
  const formattedDate = dayjs(timeStamp).format("DD/MM/YYYY");

  return (
    <div className=" relative w-72 h-48 rounded-3xl py-5 px-8 bg-night overflow-hidden shadow-xl">
      <a href="" className="box_date_time__link">
        <BoxTemperature city={timezoneData.city} />
        <div className="relative flex flex-col justify-between h-full z-20">
          <BoxLocation timezoneData={timezoneData} />
          <div>
            <BoxTime timeStamp={timeStamp} />
            <BoxDate formattedDate={formattedDate} />
          </div>
        </div>
      </a>
    </div>
  );
}

const MemoBoxCountryDateTime = memo(BoxCountryDateTime);

export default MemoBoxCountryDateTime;
