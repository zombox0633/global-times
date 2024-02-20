import { memo } from "react";
import dayjs from "dayjs";

type DisplayGlobalDatePropsType = {
  timeStamp: string | null;
};

function DisplayGlobalDate({ timeStamp }: DisplayGlobalDatePropsType) {
  const formattedDate = timeStamp
    ? dayjs(timeStamp).format("DD/MM/YYYY")
    : "01/00/2000";

  return (
    <div className="mt-1">
      <h3>{formattedDate}</h3>
    </div>
  );
}

const MemoDisplayGlobalDate = memo(DisplayGlobalDate);

export default MemoDisplayGlobalDate;
