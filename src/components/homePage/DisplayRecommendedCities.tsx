import BoxCountryDateTime from "./BoxCountryDateTime";
import { InterestDataType } from "../../service/interest/getInterestGroupData.type";

type DisplayRecommendedCitiesPropsType = {
  sortInterestData: InterestDataType[];
  loading: boolean;
  error: string | null;
};

function DisplayRecommendedCities(props: DisplayRecommendedCitiesPropsType) {
  const { sortInterestData, loading, error } = props;

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='layout__content'>
        <div className=' mb-8 px-[25%] sm:px-8 md:px-16  xl:px-8 2xl:px-[2%]'>
          <h3>Recommended cities</h3>
        </div>
        {loading && (
          <div className='flex h-80 items-center justify-center'>
            <h3>Loading...</h3>
          </div>
        )}
        {error && (
          <div className='flex h-80 items-center justify-center'>
            <h3 className=' text-red-500'>Error: {error}</h3>
          </div>
        )}
        {!loading && !error && (
          <div
            className='layout__content relative grid gap-y-5 sm:grid-cols-2 sm:gap-y-8 
            lg:grid-cols-3 xl:grid-cols-4'
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
