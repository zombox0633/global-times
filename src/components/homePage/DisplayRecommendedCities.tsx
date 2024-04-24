import BoxCountryDateTime from "./BoxCountryDateTime";
import useGetInterestGroupData from "../../hook/globalTimeService/useGetInterestGroupData";

function DisplayRecommendedCities() {
  const { sortInterestData, loading, error } = useGetInterestGroupData({
    page: 1,
    size: 8,
  });

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-[90dvw] sm:max-w-[45rem] lg:max-w-[76rem] 2xl:w-[80dvw] 2xl:max-w-[85rem]'>
        <div className=' mb-10  px-[25%] sm:px-8 md:px-16  xl:px-8 2xl:px-[2%]'>
          <h3>Recommended cities</h3>
        </div>
        {loading && (
          <div className='flex h-80 items-center justify-center'>
            <h2>Loading...</h2>
          </div>
        )}
        {error && (
          <div className='flex h-80 items-center justify-center'>
            <h2>Error: {error}</h2>
          </div>
        )}
        {!loading && !error && (
          <div
            className='relative grid w-[90dvw] gap-y-5 sm:max-w-[45rem]
            sm:grid-cols-2 sm:gap-y-8 lg:max-w-[76rem] lg:grid-cols-3 
            xl:grid-cols-4 2xl:w-[80dvw] 2xl:max-w-[85rem]'
          >
            {sortInterestData.map((item, index) => (
              <div key={index} className=' flex items-center justify-center'>
                <BoxCountryDateTime timezoneData={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayRecommendedCities;
