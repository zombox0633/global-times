import dayjs from "dayjs";
import { useDateTimeContext } from "../context/TimeStampProvider";

function DisplayGlobalDate() {
  const { timeStamp } = useDateTimeContext();
  const formattedDate = timeStamp ? dayjs(timeStamp).format("DD/MM/YYYY") : "";

  return (
    <div className="mt-1 ml-2">
      <h3>{formattedDate}</h3>
    </div>
  );
}

export default DisplayGlobalDate;
