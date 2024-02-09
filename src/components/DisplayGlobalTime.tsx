import dayjs from "dayjs";
import { useDateTimeContext } from "../context/TimeStampProvider";

function DisplayGlobalTime() {
  const { timeStamp } = useDateTimeContext();
  const formattedTime = timeStamp ? dayjs(timeStamp).format("hh:mm:ss") : ""
  const formattedMeridiem = timeStamp ? dayjs(timeStamp).format("A") : ""

  return (
    <div className=" flex justify-between w-[13.5rem] sm:w-[20.5rem] lg:w-[27rem] xl:w-[27.2] 2xl:w-[37rem] my-2">
      <h1>{formattedTime}</h1>
      <h1>{formattedMeridiem}</h1>
    </div>
  );
}

export default DisplayGlobalTime;
