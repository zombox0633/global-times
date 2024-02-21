import { memo } from "react";

type DisplayDatePropsType = {
  formattedDate: string;
};

function DisplayDate({ formattedDate }: DisplayDatePropsType) {
  return (
    <div>
      <p className=' text-xl'>{formattedDate}</p>
    </div>
  );
}

const MemoDisplayDate = memo(DisplayDate);

export default MemoDisplayDate;
