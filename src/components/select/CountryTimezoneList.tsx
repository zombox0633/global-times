import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { formatForURL } from "../../helper/formatForURL";
import { CityDataType } from "../../service/GlobalTimeService.type";

type CountryTimezoneListDataPropsType = {
  sortTimezoneData: CityDataType[];
  showSelectCountry: boolean;
};

type CountryTimezoneListPropsType = {
  countryTimezoneData: CountryTimezoneListDataPropsType;
};

function CountryTimezoneList({ countryTimezoneData }: CountryTimezoneListPropsType) {
  const { sortTimezoneData, showSelectCountry} = countryTimezoneData;
  const navigate = useNavigate();

  const handleChangeTimezone = (timezone: CityDataType) => {
    const cityPath = formatForURL(timezone.city_name);
    navigate(`/city/${cityPath}`);
  };

  return (
    <ul
      className={clsx(
        " absolute z-50 mt-4 w-40 rounded-lg bg-night transition-all duration-700 ease-in-out",
        {
          "top-20 sm:top-24 xl:top-[6.2rem]": showSelectCountry,
          "-top-[100%]": !showSelectCountry,
        },
      )}
    >
      {sortTimezoneData.map((item, index) => (
        <li key={`timezone-${index + 1}`} className='z-10 mb-1'>
          <button
            type='button'
            aria-label={`Select time zone for ${item.country_name}`}
            value={item.city_name}
            onClick={() => handleChangeTimezone(item)}
            className='w-[9.75rem] bg-night pl-4 text-start text-xl'
          >
            {item.country_name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CountryTimezoneList;
