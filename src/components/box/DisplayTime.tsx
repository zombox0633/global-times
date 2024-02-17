import { memo } from "react";
import dayjs from "dayjs";

type DisplayTimePropsType = {
  timeStamp: string
}

function DisplayTime({timeStamp}:DisplayTimePropsType) {
  const formattedTime = timeStamp ? dayjs(timeStamp).format("hh:mm") : ""
  const formattedMeridiem = timeStamp ? dayjs(timeStamp).format("A") : ""

  return (
    <div className=" flex justify-between w-[7.6rem] mt-4 mb-1">
      <p className=" text-4xl">{formattedTime}</p>
      <p className="text-4xl">{formattedMeridiem}</p>
    </div>
  );
}

const MemoBoxDisplayTime = memo(DisplayTime)

export default MemoBoxDisplayTime;
