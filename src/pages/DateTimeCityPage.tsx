import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplayDateTime from "../components/containerDateTime/DisplayDateTime";
import DisplayWeather from "../components/containerWeather/DisplayWeather";
import { useWeatherContext } from "../context/weather/WeatherContext";
import useGetCityByCityName from "../hook/globalTimeService/useGetCityByCityName";
import { formatForURL } from "../helper/formatForURL";

function DateTimeCityPage() {
  const { cityPath } = useParams();
  const formatCityName = (cityPath && formatForURL(cityPath)) ?? "";
  const { data } = useGetCityByCityName({ cityName: formatCityName });
  const { weatherRecords, addCity } = useWeatherContext();

  const cityName = data ? data[0].city_name : "";
  const findWeatherData = weatherRecords.some(
    (record) => record.name.toLowerCase() === cityName?.toLowerCase(),
  );

  useEffect(() => {
    if (cityName) {
      addCity(cityName);
    }
  }, [cityName]);

  return (
    <div>
      <div className='grid h-[90dvh] grid-cols-6 grid-rows-3 sm:grid-cols-8'>
        <div
          className=' col-start-2 col-end-9 row-start-2 row-end-3 flex justify-center sm:col-start-3 sm:justify-end
          md:col-start-4 md:col-end-8 lg:col-start-5'
        >
          {data && <DisplayDateTime data={data[0]} />}
        </div>
        <div className=' col-start-1 row-start-3 row-end-4 hidden justify-end sm:col-span-9 sm:flex md:col-end-8 xl:col-start-3'>
          {findWeatherData && cityName && <DisplayWeather cityName={cityName} />}
        </div>
      </div>
    </div>
  );
}

export default DateTimeCityPage;
