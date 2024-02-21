import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
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
        type='button'
        onClick={() => setShowDropDown((prev) => !prev)}
        className='focus__df relative z-20 flex w-40 items-center justify-center pl-4'
      >
        TimeZone
        <span
          className={clsx("material-symbols-outlined my-1 ml-1", {
            " rotate-0": showDropDown,
            "rotate-180": !showDropDown,
          })}
        >
          expand_more
        </span>
      </button>
      <ul
        className={clsx(
          "absolute mt-4 w-40 bg-eerieBlack transition-all duration-1000 ease-in-out",
          {
            "top-20 sm:top-24 xl:top-28": showDropDown,
            "-top-[100%]": !showDropDown,
          },
        )}
      >
        {timezoneData.map((item, index) => (
          <li key={`timezone-${index + 1}`} className='z-10 mb-1'>
            <button
              type='button'
              value={item.continent}
              onClick={() => handleChangeTimezone(item)}
              className='w-[9.75rem] pl-4 text-start'
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
