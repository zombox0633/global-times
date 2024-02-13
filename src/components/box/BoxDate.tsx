import { memo } from "react";

type BoxDatePropsType = {
  formattedDate: string;
};

function BoxDate({ formattedDate }: BoxDatePropsType) {
  return (
    <div>
      <p className=" text-xl">{formattedDate}</p>
    </div>
  );
}

const MemoBoxDate = memo(BoxDate);

export default MemoBoxDate;
