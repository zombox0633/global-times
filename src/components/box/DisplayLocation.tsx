import { BoxCountryDateTimePropsTypes } from "./BoxCountryDateTime.type";

function DisplayLocation({ timezoneData }: BoxCountryDateTimePropsTypes) {
  return (
    <div>
      <p className='text-2xl'>{timezoneData.country}</p>
      <p className='text-lg'>{timezoneData.city}</p>
    </div>
  );
}

export default DisplayLocation;
