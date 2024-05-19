import DisplayGlobalDate from "./DisplayGlobalDate";
import DisplayGlobalTime from "./DisplayGlobalTime";
import DisplayCity from "./DisplayCity";
import TogglePinCountryButton from "../TogglePinCountryButton";

import useTime from "../../hook/useTime";
import { GlobalTimeDataType } from "../../service/GlobalTimeService.type";

type DisplayDateTimePropsType = {
  data: GlobalTimeDataType;
};

function DisplayDateTime({ data }: DisplayDateTimePropsType) {
  const { timeStamp } = useTime({ timezoneName: data.timezone_name });
  const countryName: string = data?.country_name ?? "";
  const cityName: string = data?.city_name ?? "";

  return (
    <div className=' relative flex w-[13.7rem] flex-col justify-start sm:w-[20.8rem] lg:w-[27.8rem] 2xl:w-[36.8rem]'>
      <div className=' absolute -right-4 -top-10'>
        <TogglePinCountryButton cityName={cityName} />
      </div>
      <DisplayCity cityName={cityName} />
      <DisplayGlobalTime timeStamp={timeStamp} />
      <div className=' flex items-center justify-between'>
        <h3 className='pl-2'>{countryName}</h3>
        <DisplayGlobalDate timeStamp={timeStamp} />
      </div>
    </div>
  );
}

export default DisplayDateTime;
