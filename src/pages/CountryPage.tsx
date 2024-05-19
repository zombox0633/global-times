import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { formatForURL, kebabToTitleCase } from "../helper/formatForURL";
import useGetCountryDataByName from "../hook/globalTimeService/useGetCountryDataByName";
import { GlobalTimeDataType } from "../service/GlobalTimeService.type";
import TimezoneGroup from "../components/countryPage/TimezoneGroup";
import HeaderSection from "../components/searchBar/HeaderSection";
import { utcFormat } from "../helper/formatTime";

type TimezoneDataGroupType = {
  [key: string]: GlobalTimeDataType[];
};

function CountryPage() {
  const { countryPath } = useParams();
  const formatCountry = (countryPath && formatForURL(countryPath)) ?? "";
  const { sortCountryData } = useGetCountryDataByName({
    countryName: formatCountry,
    page: 1,
    size: 100,
  });

  const timezoneNameGroup = useMemo(() => {
    if (!sortCountryData) return {};
    return sortCountryData.reduce<TimezoneDataGroupType>((acc, item) => {
      acc[item.timezone_name] = acc[item.timezone_name] || [];
      acc[item.timezone_name].push(item);
      return acc;
    }, {});
  }, [sortCountryData]);

  const sortedTimezoneNameGroup = useMemo(() => {
    return Object.entries(timezoneNameGroup).sort(([a], [b]) => {
      const offsetA = utcFormat(a, false).split("UTC")[1];
      const offsetB = utcFormat(b, false).split("UTC")[1];

      return offsetA.localeCompare(offsetB);
    });
  }, [timezoneNameGroup]);

  const formattedCountry = kebabToTitleCase(countryPath);

  return (
    <div>
      <HeaderSection />
      <div className=' flex justify-center'>
        <div className='w-[90dvw] sm:max-w-[45rem] lg:max-w-[76rem] 2xl:w-[80dvw] 2xl:max-w-[85rem]'>
          <div className=' my-6 mt-10 sm:my-8 lg:my-10'>
            <h2 className=' text-4xl sm:text-5xl lg:text-6xl'>
              Time in <span className=' text-[#F3A712]'>{formattedCountry}</span>
            </h2>
          </div>
          <div>
            {sortedTimezoneNameGroup.map(([timezone, cities]) => (
              <TimezoneGroup key={timezone} timezone={timezone} cities={cities} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
