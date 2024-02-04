import { memo } from "react";
import useTime from "../hook/useTime";
import { timezoneType } from "../constraint/TIMEZONE_DATA";

type ShowTimerType = {
  timezoneData: timezoneType;
};

function ShowTimer({ timezoneData }: ShowTimerType) {
  const { timeNow, AMPM, dateNow } = useTime({
    timezoneData: timezoneData.timeZone,
  });
  return (
    <div className=" w-56 sm:w-[20.5rem] lg:w-[27rem] 2xl:w-[36.5rem] flex justify-center flex-col">
      <div className="flex justify-end mr-2">
        <h3>{timezoneData.country}</h3>
      </div>
      <div className=" flex justify-between w-56 sm:w-[20.5rem] lg:w-[27rem] 2xl:w-[36.5rem] my-2">
        <h1>{timeNow}</h1>
        <h1>{AMPM ? "PM" : "AM"}</h1>
      </div>
      <div className="mt-1 ml-2">
        <h3>{dateNow}</h3>
      </div>
    </div>
  );
}

const MemoShowTimer = memo(ShowTimer);

export default MemoShowTimer;
