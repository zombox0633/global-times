import { capitalizeFirstLetter } from "../../helper/formatForURL";

type DisplayLocationPropType = {
  country: string;
  city: string;
};

function DisplayLocation({ country, city }: DisplayLocationPropType) {
  const countryName = capitalizeFirstLetter(country);
  const cityName = capitalizeFirstLetter(city);

  return (
    <div>
      <p className='text-2xl'>{countryName}</p>
      <p className='text-lg'>{cityName}</p>
    </div>
  );
}

export default DisplayLocation;
