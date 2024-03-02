import clsx from "clsx";
import { GlobalTimeType } from "../../constraint/TIMEZONE_DATA";

type CountryTimezoneListDataPropsType = {
  sortTimezoneData: GlobalTimeType[];
  showSelectCountry: boolean;
  handleChangeTimezone: (timezone: GlobalTimeType) => void;
};

type CountryTimezoneListPropsType = {
  countryTimezoneData: CountryTimezoneListDataPropsType;
};

function CountryTimezoneList({ countryTimezoneData }: CountryTimezoneListPropsType) {
  const { sortTimezoneData, showSelectCountry, handleChangeTimezone } = countryTimezoneData;
  return (
    <ul
      className={clsx(
        "absolute mt-4 w-40 rounded-lg bg-eerieBlack transition-all duration-1000 ease-in-out",
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
            className='w-[9.75rem] bg-eerieBlack pl-4 text-start text-xl'
          >
            {item.country}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CountryTimezoneList;
