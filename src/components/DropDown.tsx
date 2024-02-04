import { useState } from "react";
import { timezoneData, timezoneType } from "../constraint/TIMEZONE_DATA";

type DropDownType = {
  setTimezone: React.Dispatch<React.SetStateAction<timezoneType>>;
};

function DropDown({ setTimezone }: DropDownType) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  return (
    <div>
      <button
        className="focus__df flex items-center justify-center w-40 pl-4"
        onClick={() => setShowDropDown((prev) => !prev)}
      >
        TimeZone
        <span className={`material-symbols-outlined  ${showDropDown ? "rotate-0" : "rotate-180"} my-2 ml-1 transition-all duration-500 ease-in-out`}>chevron_left</span>
      </button>
      <ul className={`absolute ${showDropDown ? "left-12 ": "-left-[100%]"}  w-40 mt-4 transition-all duration-500 ease-in-out`}>
        {timezoneData.map((item, index) => (
          <li id={`timezone-${index + 1}`} className="mb-1 ">
            <button
              className="pl-4 text-start w-[9.75rem]"
              value={item.timeZone}
              onClick={() =>
                setTimezone({ country: item.country, timeZone: item.timeZone })
              }
            >
              {item.country}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
