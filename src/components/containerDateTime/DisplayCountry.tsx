import { GlobalTimeType } from "../../constraint/TIMEZONE_DATA";

type DisplayCountryPropsType = {
  timezone: GlobalTimeType | null;
};

function DisplayCountry({ timezone }: DisplayCountryPropsType) {
  return (
    <div className='flex justify-end'>
      <h3>{timezone?.country}</h3>
    </div>
  );
}

export default DisplayCountry;
