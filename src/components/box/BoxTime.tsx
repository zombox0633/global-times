import { memo } from "react";
import dayjs from "dayjs";

type BoxTimePropsType = {
  timeStamp: string
}

function BoxTime({timeStamp}:BoxTimePropsType) {
  const formattedTime = dayjs(timeStamp).format("hh:mm")
  const formattedMeridiem = dayjs(timeStamp).format("A")

  return (
    <div className=" flex justify-between w-[7.6rem] mt-4 mb-1">
      <p className=" text-4xl">{formattedTime}</p>
      <p className="text-4xl">{formattedMeridiem}</p>
    </div>
  );
}

const MemoBoxTime = memo(BoxTime)

export default MemoBoxTime;
