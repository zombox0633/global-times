import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalTimeType, timezoneData } from "../constraint/TIMEZONE_DATA";

function DropDown() {
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const handleChangeTimezone = (timezone: GlobalTimeType) => {
    navigate(`/country/${timezone.country.toLowerCase()}`);
  };

  return (
    <div>
      <button
        className="focus__df relative flex items-center justify-center w-40 pl-4 z-20"
        onClick={() => setShowDropDown((prev) => !prev)}
      >
        TimeZone
        <span
          className={`material-symbols-outlined  ${
            showDropDown ? "rotate-0" : "rotate-180"
          } my-1 ml-1 transition-all duration-500 ease-in-out`}
        >
          expand_more
        </span>
      </button>
      <ul
        className={`absolute ${
          showDropDown ? "top-20 sm:top-24 xl:top-28" : "-top-[100%]"
        } w-40 mt-4 bg-eerieBlack transition-all duration-1000 ease-in-out`}
      >
        {timezoneData.map((item, index) => (
          <li key={`timezone-${index + 1}`} className="mb-1 z-10">
            <button
              className="pl-4 text-start w-[9.75rem]"
              value={item.continent}
              onClick={() => handleChangeTimezone(item)}
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
