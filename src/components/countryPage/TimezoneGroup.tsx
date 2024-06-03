import DisplayTime from "../homePage/DisplayTime";
import CustomLink from "../CustomLink";
import useTime from "../../hook/useTime";
import { checkTimesEqual, utcFormat } from "../../helper/formatTime";
import { GlobalTimeDataType } from "../../service/GlobalTimeService.type";
import { GroupPropsType } from "../../hook/useGroupedData";

function TimezoneGroup({ groupName, item }: GroupPropsType<GlobalTimeDataType>) {
  const { timeStamp } = useTime({ timezoneName: groupName });

  const StandardTime = utcFormat(groupName, false);
  const DaylightSavingTime = utcFormat(groupName, true);

  const areTimesEqual = checkTimesEqual(StandardTime, DaylightSavingTime);
  const formatTimezone = groupName.replaceAll("_", " ");

  return (
    <div className='mb-12 rounded-xl bg-black/15 px-4 pb-8 pt-4 shadow-md sm:px-8 '>
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
      <div className='layout__content grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 lg:px-2 xl:grid-cols-5'>
        {item.map((data) => (
          <CustomLink key={data.id} path='city' linkName={data.city_name} />
        ))}
      </div>
    </div>
  );
}

export default TimezoneGroup;
