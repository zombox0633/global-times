import { memo } from "react";
import dayjs from "dayjs";

type DisplayTimePropsType = {
  timeStamp: string;
};

function DisplayTime({ timeStamp }: DisplayTimePropsType) {
  const formattedTime = timeStamp ? dayjs(timeStamp).format("hh:mm") : "";
  const formattedMeridiem = timeStamp ? dayjs(timeStamp).format("A") : "";

  return (
    <div className=' mb-1 mt-4 flex w-[7.6rem] justify-between'>
      <p className=' text-4xl'>{formattedTime}</p>
      <p className='text-4xl'>{formattedMeridiem}</p>
    </div>
  );
}

const MemoBoxDisplayTime = memo(DisplayTime);

export default MemoBoxDisplayTime;
