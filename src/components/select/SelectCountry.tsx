import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { GlobalTimeType, timezoneData } from "../../constraint/TIMEZONE_DATA";
import { formatForURL } from "../../helper/formatForURL";
import CountryTimezoneList from "./CountryTimezoneList";

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
      <CountryTimezoneList
        countryTimezoneData={{ sortTimezoneData, showSelectCountry, handleChangeTimezone }}
      />
    </div>
  );
}

export default SelectCountry;
