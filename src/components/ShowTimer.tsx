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
    <div className=" w-[36.5rem] flex justify-center flex-col">
      <div className="flex justify-end mr-2">
        <p className="text-4xl">{timezoneData.country}</p>
      </div>
      <div className=" flex justify-between w-[36.5rem] my-2">
        <p className="text-9xl">{timeNow}</p>
        <p className="text-9xl">{AMPM ? "PM" : "AM"}</p>
      </div>
      <div className="mt-1 ml-2">
        <p className="text-4xl">{dateNow}</p>
      </div>
    </div>
  );
}

const MemoShowTimer = memo(ShowTimer);

export default MemoShowTimer;
