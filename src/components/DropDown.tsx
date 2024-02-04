import { timezoneData, timezoneType } from "../constraint/TIMEZONE_DATA";

type DropDownType = {
  setTimezone: React.Dispatch<React.SetStateAction<timezoneType>>;
};

function DropDown({ setTimezone }: DropDownType) {
  return (
    <div>
      <button className="focus__df flex items-center justify-center w-40 pl-4">
        TimeZone
        <span className="material-symbols-outlined mt-2 ml-1">expand_more</span>
      </button>
      <ul className="w-40 mt-4 ">
        {timezoneData.map((item, index) => (
          <li id={`timezone-${index + 1}`} className="mb-1 ">
            <button
              className="pl-4 text-start w-40"
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
