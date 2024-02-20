import DisplayGlobalDate from "./DisplayGlobalDate";
import DisplayGlobalTime from "./DisplayGlobalTime";
import DisplayCountry from "./DisplayCountry";
import { useTimeStampContext } from "../../context/dateTime/TimeStampContext";

function DisplayDateTime() {
  const { timeStamp, timezone } = useTimeStampContext();
  
  return (
    <div className=" w-[13.7rem] sm:w-[20.7rem] lg:w-[27.5rem] 2xl:w-[36.5rem] flex justify-center flex-col">
      <DisplayCountry timezone={timezone} />
      <DisplayGlobalTime timeStamp={timeStamp} />
      <DisplayGlobalDate timeStamp={timeStamp} />
    </div>
  );
}

export default DisplayDateTime;
