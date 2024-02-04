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
    <div className="grid grid-cols-8 h-screen w-screen p-12 overflow-hidden">
      <div className="col-start-1 col-end-3 ">
        <DropDown setTimezone={setTimezone} />
      </div>
      <div className=" col-start-5 col-end-9 flex justify-center w-[38rem]">
        <ShowTimer timezoneData={timezone} />
      </div>
    </div>
  );
}

export default App;
