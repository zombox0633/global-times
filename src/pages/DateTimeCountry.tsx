import DropDown from "../components/DropDown";
import ContainerDateTime from "../components/container/ContainerDateTime";

function DateTimeCountry() {
  
  return (
    <div className="w-dvw h-dvh p-4 sm:p-8 md:p-12 overflow-hidden">
      <div className="grid grid-rows-3 grid-cols-6 sm:grid-cols-8 h-[90dvh]">
        <div className="col-start-1 sm:col-end-2 h-20 sm:h-screen">
          <DropDown />
        </div>
        <div
          className=" row-start-2 row-end-3 col-start-2 sm:col-start-3 md:col-start-4 lg:col-start-5 col-end-9 2xl:col-end-8
      flex"
        >
          <ContainerDateTime />
        </div>
      </div>
    </div>
  );
}

export default DateTimeCountry;
