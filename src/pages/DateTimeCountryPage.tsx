import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SelectCountry from "../components/select/SelectCountry";
import DisplayDateTime from "../components/containerDateTime/DisplayDateTime";
import DisplayWeather from "../components/containerWeather/DisplayWeather";
import { useTimeStampContext } from "../context/dateTime/TimeStampContext";
import { useWeatherContext } from "../context/weather/WeatherContext";

function DateTimeCountryPage() {
  const { countryPath } = useParams();
  const { timezone, findTimezone } = useTimeStampContext();
  const { weatherRecords, addCity } = useWeatherContext();

  const cityName = timezone?.city;
  countryPath && findTimezone(countryPath);

  const findWeatherData = weatherRecords.some(
    (record) => record.name.toLowerCase() === cityName?.toLowerCase(),
  );

  useEffect(() => {
    if (cityName) {
      addCity(cityName);
    }
  }, [cityName]);

  return (
    <div className='h-dvh w-dvw overflow-hidden p-4 sm:p-8 md:p-12'>
      <div className=' absolute left-0 top-0 z-20 h-24 w-full bg-eerieBlack' />
      <div className='grid h-[90dvh] grid-cols-6 grid-rows-3 sm:grid-cols-8'>
        <div className='col-start-1 row-start-1 h-20 sm:col-end-2'>
          <SelectCountry />
        </div>
        <div
          className=' col-start-2 col-end-9 row-start-2 row-end-3 flex justify-center sm:col-start-3 sm:justify-end
          md:col-start-4 md:col-end-8 lg:col-start-5'
        >
          <DisplayDateTime />
        </div>
        <div className=' col-start-1 row-start-3 row-end-4 hidden justify-end sm:col-span-9 sm:flex md:col-end-8 xl:col-start-3'>
          {findWeatherData && <DisplayWeather />}
        </div>
      </div>
    </div>
  );
}

export default DateTimeCountryPage;
