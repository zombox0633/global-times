import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { GlobalTimeType, timezoneData } from "../constraint/TIMEZONE_DATA";
import { formatForURL } from "../helper/formatForURL";

function SelectCountry() {
  const navigate = useNavigate();
  const [showSelectCountry, setShowSelectCountry] = useState<boolean>(false);

  const filterHighlight = timezoneData.filter((item) => item.highlighted);
  const sortTimezoneData = filterHighlight.sort((a, b) => a.country.localeCompare(b.country));

  const handleChangeTimezone = (timezone: GlobalTimeType) => {
    const countryPath = formatForURL(timezone.country);
    navigate(`/country/${countryPath}`);
  };

  return (
    <div>
      <button
        type='button'
        onClick={() => setShowSelectCountry((prev) => !prev)}
        className='focus__df relative z-30 flex w-40 items-center justify-center bg-eerieBlack pl-4'
      >
        TimeZone
        <span
          className={clsx("material-symbols-outlined my-1 ml-1", {
            " rotate-0": showSelectCountry,
            "rotate-180": !showSelectCountry,
          })}
        >
          expand_more
        </span>
      </button>
      <ul
        className={clsx(
          "absolute mt-4 w-40 bg-eerieBlack transition-all duration-1000 ease-in-out",
          {
            "top-20 sm:top-24 xl:top-28": showSelectCountry,
            "-top-[100%]": !showSelectCountry,
          },
        )}
      >
        {sortTimezoneData.map((item, index) => (
          <li key={`timezone-${index + 1}`} className='z-10 mb-1'>
            <button
              type='button'
              value={item.continent}
              onClick={() => handleChangeTimezone(item)}
              className='w-[9.75rem] pl-4 text-xl text-start'
            >
              {item.country}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectCountry;
