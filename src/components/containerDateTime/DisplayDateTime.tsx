import DisplayGlobalDate from "./DisplayGlobalDate";
import DisplayGlobalTime from "./DisplayGlobalTime";
import DisplayCountry from "./DisplayCountry";
import ButtonNavigateToHome from "../ButtonNavigateToHome";
import { useTimeStampContext } from "../../context/dateTime/TimeStampContext";

function DisplayDateTime() {
  const { timeStamp, timezone } = useTimeStampContext();

  return (
    <div className=' flex w-[13.7rem] flex-col justify-start sm:w-[20.8rem] lg:w-[27.8rem] 2xl:w-[36.8rem]'>
      <div className='z-40 flex items-center justify-end'>
        <div className='mr-4'>
          <ButtonNavigateToHome />
        </div>
        <DisplayCountry timezone={timezone} />
      </div>
      <DisplayGlobalTime timeStamp={timeStamp} />
      <DisplayGlobalDate timeStamp={timeStamp} />
    </div>
  );
}

export default DisplayDateTime;
