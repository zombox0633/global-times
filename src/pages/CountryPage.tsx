import { useParams } from "react-router-dom";
import { formatForURL, kebabToTitleCase } from "../helper/formatForURL";
import useGetCountryDataByName from "../hook/globalTimeService/useGetCountryDataByName";
import TimezoneGroup from "../components/countryPage/TimezoneGroup";
import HeaderSection from "../components/searchBar/HeaderSection";

function CountryPage() {
  const { countryPath } = useParams();
  const formatCountry = (countryPath && formatForURL(countryPath)) ?? "";
  const { sortedTimezoneNameGroup, error } = useGetCountryDataByName({
    countryName: formatCountry,
    page: 1,
    size: 100,
  });

  const formattedCountry = kebabToTitleCase(countryPath);

  return (
    <div>
      <HeaderSection />
      <div className=' flex justify-center'>
        <div className='layout__content'>
          <div className=' my-6 mt-10 sm:my-6 lg:my-8'>
            <h2 className=' text-4xl sm:text-5xl lg:text-6xl'>
              Time in <span className=' text-[#F3A712]'>{formattedCountry}</span>
            </h2>
          </div>
          {error && (
            <div>
              <h3 className=' text-red-500'>{error}</h3>
            </div>
          )}
          <div>
            {sortedTimezoneNameGroup.map(([timezone, cities]) => (
              <TimezoneGroup key={timezone} groupName={timezone} item={cities} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
