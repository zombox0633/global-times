import { useState } from "react";
import DropDown from "./components/DropDown";
import ShowTimer from "./components/ShowTimer";
import { timezoneType } from "./constraint/TIMEZONE_DATA";

function App() {
  const [timezone, setTimezone] = useState<timezoneType>({
    country: "Thailand",
    timeZone: "Asia/Bangkok",
  });

  return (
    <div className="grid grid-rows-3 grid-cols-6 sm:grid-cols-8 h-screen w-screen p-4 sm:p-8 md:12 overflow-hidden">
      <div className="col-start-1 sm:col-end-3 h-20 sm:h-screen">
        <DropDown setTimezone={setTimezone} />
      </div>
      <div className=" row-start-2 row-end-3 col-start-2 sm:col-start-3 md:col-start-4 xl:col-start-5 col-end-9 flex justify-center w-64 sm:w-[30rem] xl:w-[40rem]">
        <ShowTimer timezoneData={timezone} />
      </div>
    </div>
  );
}

export default App;
