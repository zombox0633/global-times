import DisplayGlobalDate from "./DisplayGlobalDate";
import DisplayGlobalTime from "./DisplayGlobalTime";
import DisplayCountry from "./DisplayCountry";
import { useTimeStampContext } from "../../context/dateTime/TimeStampContext";

function DisplayDateTime() {
  const { timeStamp, timezone } = useTimeStampContext();

  return (
    <div className=' flex w-[13.7rem] flex-col justify-center sm:w-[20.7rem] lg:w-[27.5rem] 2xl:w-[36.5rem]'>
      <DisplayCountry timezone={timezone} />
      <DisplayGlobalTime timeStamp={timeStamp} />
      <DisplayGlobalDate timeStamp={timeStamp} />
    </div>
  );
}

export default DisplayDateTime;
