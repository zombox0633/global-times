import { memo } from "react";
import dayjs from "dayjs";
import { useDateTimeContext } from "../../context/TimeStampProvider";

function DisplayGlobalTime() {
  const { timeStamp } = useDateTimeContext();
  
  const formattedTime = timeStamp
    ? dayjs(timeStamp).format("hh:mm:ss")
    : "00:00:00";
  const formattedMeridiem = timeStamp ? dayjs(timeStamp).format("A") : "AM";

  return (
    <div className=" flex justify-between w-[13.5rem] sm:w-[20.5rem] lg:w-[27rem] xl:w-[27.2] 2xl:w-[36.5rem] my-2">
      <h1>{formattedTime}</h1>
      <h1>{formattedMeridiem}</h1>
    </div>
  );
}

const MemoDisplayGlobalTime = memo(DisplayGlobalTime);

export default MemoDisplayGlobalTime;
