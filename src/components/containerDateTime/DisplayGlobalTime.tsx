import { memo } from "react";
import dayjs from "dayjs";

type DisplayGlobalTimePropsType = {
  timeStamp: string | null;
};

function DisplayGlobalTime({ timeStamp }: DisplayGlobalTimePropsType) {
  const formattedTime = timeStamp ? dayjs(timeStamp).format("hh:mm:ss") : "00:00:00";
  const formattedMeridiem = timeStamp ? dayjs(timeStamp).format("A") : "AM";

  return (
    <div className='my-2 flex w-[13.5rem] justify-between sm:w-[21rem] lg:w-[28rem] xl:w-[28rem] 2xl:w-[37.5rem]'>
      <h1>{formattedTime}</h1>
      <h1 className="pr-1">{formattedMeridiem}</h1>
    </div>
  );
}

const MemoDisplayGlobalTime = memo(DisplayGlobalTime);

export default MemoDisplayGlobalTime;
