import { firstLetterUppercase } from "../../helper/formatForURL";

type DisplayLocationPropType = {
  country: string;
  city: string;
};

function DisplayLocation({ country, city }: DisplayLocationPropType) {
  const countryName = firstLetterUppercase(country);
  const cityName = firstLetterUppercase(city);

  return (
    <div>
      <p className='text-2xl'>{countryName}</p>
      <p className='text-lg'>{cityName}</p>
    </div>
  );
}

export default DisplayLocation;
