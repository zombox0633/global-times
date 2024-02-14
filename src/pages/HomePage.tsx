import BoxCountryDateTime from "../components/box/BoxCountryDateTime";
import { timezoneData } from "../constraint/TIMEZONE_DATA";

function HomePage() {
  return (
    <div className=" p-4 sm:pt-4 sm:pb-8  overflow-x-hidden">
      <div className=" flex items-center h-20 2xl:h-40 mx-8 my-4 sm:my-0 mb-10 sm:mb-8">
        <h1 className=" text-5xl md:text-6xl lg:text-7xl">Time Zone</h1>
      </div>
      <div className=" flex justify-center ">
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 sm:gap-y-8 w-[90dvw] 2xl:w-[80dvw] sm:max-w-[45rem] lg:max-w-[76rem] 2xl:max-w-[85rem]">
          {timezoneData.map((item, index) => (
            <div key={index} className=" flex justify-center items-center">
              <BoxCountryDateTime timezoneData={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
