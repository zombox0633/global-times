import { checkTimesEqual, utcFormat } from "../../helper/formatTime";
import useTime from "../../hook/useTime";
import { GlobalTimeDataType } from "../../service/GlobalTimeService.type";
import DisplayTime from "../homePage/DisplayTime";
import CityLink from "./CityLink";

type TimezoneGroupPropsType = {
  timezone: string;
  cities: GlobalTimeDataType[];
};

function TimezoneGroup({ timezone, cities }: TimezoneGroupPropsType) {
  const { timeStamp } = useTime({ timezoneName: timezone });

  const StandardTime = utcFormat(timezone, false);
  const DaylightSavingTime = utcFormat(timezone, true);

  const areTimesEqual = checkTimesEqual(StandardTime, DaylightSavingTime);
  const formatTimezone = timezone.replaceAll("_", " ");

  return (
    <div className='mb-12 rounded-xl bg-black/15 px-4 pb-8 pt-4 shadow-md sm:px-8 '>
      <div>
        <div className=' mb-6 flex flex-col-reverse justify-end md:flex-row md:justify-between'>
          <div>
            <h3 className='leading-relaxed'>
              Time zone info for <span className=' text-[#A7C957]'>{formatTimezone}</span>
            </h3>
            <p className=' text-lg leading-relaxed'>
              Standard Time <span className=' text-[#DB2B39]'>{StandardTime}</span>
            </p>
            {!areTimesEqual && (
              <p className=' text-lg leading-relaxed'>
                Daylight Saving Time <span className=' text-[#3A86FF]'>{DaylightSavingTime}</span>
              </p>
            )}
          </div>
          <div className=' mb-4 sm:mb-0'>
            <DisplayTime timeStamp={timeStamp} />
          </div>
        </div>
        <div className=' grid w-[90dvw] grid-cols-2 gap-y-6 sm:max-w-[45rem] sm:grid-cols-3 lg:max-w-[76rem] lg:grid-cols-4 lg:px-2 xl:grid-cols-5 2xl:w-[80dvw] 2xl:max-w-[85rem]'>
          {cities.map((item) => (
            <CityLink item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimezoneGroup;
