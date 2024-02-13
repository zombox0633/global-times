import DropDown from "../components/DropDown";
import ContainerDateTime from "../components/container/ContainerDateTime";

function DateTimeCountry() {
  return (
    <div className="grid grid-rows-3 grid-cols-6 sm:grid-cols-8 w-full h-full">
      <div className="col-start-1 sm:col-end-3 h-20 sm:h-screen">
        <DropDown />
      </div>
      <div className=" row-start-2 row-end-3 col-start-2 sm:col-start-3 md:col-start-4 xl:col-start-5 col-end-9 flex justify-center w-64 sm:w-[30rem] xl:w-[40rem]">
        <ContainerDateTime />
      </div>
    </div>
  );
}

export default DateTimeCountry;
