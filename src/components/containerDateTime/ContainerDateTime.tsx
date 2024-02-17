import { useParams } from "react-router-dom";
import DisplayGlobalDate from "./DisplayGlobalDate";
import DisplayGlobalTime from "./DisplayGlobalTime";
import DisplayCountry from "./DisplayCountry";
import { useDateTimeContext } from "../../context/dateTime/DateTimeContext";
import useFindTimezone from "../../hook/useFindTimezone";

function ContainerDateTime() {
  const { countryPath } = useParams();
  const { setTimezone } = useDateTimeContext();
  useFindTimezone({ countryPath, setTimezone });

  return (
    <div className=" w-[13.7rem] sm:w-[20.7rem] lg:w-[27.5rem] 2xl:w-[36.5rem] flex justify-center flex-col">
      <DisplayCountry />
      <DisplayGlobalTime />
      <DisplayGlobalDate />
    </div>
  );
}

export default ContainerDateTime;
