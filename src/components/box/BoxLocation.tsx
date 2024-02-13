import { BoxCountryDateTimePropsTypes } from "./BoxCountryDateTime.type";

function BoxLocation({timezoneData}:BoxCountryDateTimePropsTypes) {
  return (
    <div>
      <p className="text-4xl">{timezoneData.country}</p>
      <p className=" ml-1 text-lg">{timezoneData.city}</p>
    </div>
  );
}

export default BoxLocation;
