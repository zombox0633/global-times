import { memo } from "react";
import DisplayGlobalDate from "./DisplayGlobalDate";
import DisplayGlobalTime from "./DisplayGlobalTime";
import DisplayCountry from "./DisplayCountry";

function ContainerDateTime() {
  return (
    <div className=" w-56 sm:w-[20.5rem] lg:w-[27rem] 2xl:w-[36.5rem] flex justify-center flex-col">
      <DisplayCountry />
      <DisplayGlobalTime />
      <DisplayGlobalDate />
    </div>
  );
}

const MemoShowTimer = memo(ContainerDateTime);

export default MemoShowTimer;
