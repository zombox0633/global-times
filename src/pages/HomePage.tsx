import BoxCountryDateTime from "../components/box/BoxCountryDateTime";
import { timezoneData } from "../constraint/TIMEZONE_DATA";

function HomePage() {
  return (
    <div className=' overflow-x-hidden p-4 sm:pb-8  sm:pt-4'>
      <div className=' mx-8 my-4 mb-10 flex h-20 items-center sm:my-0 sm:mb-8 2xl:h-40'>
        <h1 className=' text-5xl md:text-6xl lg:text-7xl'>Time Zone</h1>
      </div>
      <div className=' flex justify-center '>
        <div
          className=' grid w-[90dvw] gap-y-5 sm:max-w-[45rem] 
        sm:grid-cols-2 sm:gap-y-8 lg:max-w-[76rem] lg:grid-cols-3 xl:grid-cols-4 2xl:w-[80dvw] 2xl:max-w-[85rem]'
        >
          {timezoneData.map((item, index) => (
            <div key={index} className=' flex items-center justify-center'>
              <BoxCountryDateTime timezoneData={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
