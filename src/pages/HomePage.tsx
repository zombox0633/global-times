import HeaderSection from "../components/HeaderSection";
import BoxCountryDateTime from "../components/box/BoxCountryDateTime";
import { timezoneData } from "../constraint/TIMEZONE_DATA";

function HomePage() {
  const filterHighlight = timezoneData.filter((item) => item.highlighted).slice(0, 8);
  const sortTimezoneData = filterHighlight.sort((a, b) => a.country.localeCompare(b.country));

  return (
    <div className=' flex h-dvh min-h-dvh flex-col justify-between overflow-x-hidden p-8 sm:pb-8'>
      <HeaderSection />
      <div className='flex justify-center'>
        <div
          className=' grid w-[90dvw] gap-y-5 sm:max-w-[45rem]
        sm:grid-cols-2 sm:gap-y-8 lg:max-w-[76rem] lg:grid-cols-3 xl:grid-cols-4 2xl:w-[80dvw] 2xl:max-w-[85rem]'
        >
          {sortTimezoneData.map((item, index) => (
            <div key={index} className=' flex items-center justify-center'>
              <BoxCountryDateTime timezoneData={item} />
            </div>
          ))}
        </div>
      </div>
      <div className='h-8 2xl:h-20' />
    </div>
  );
}

export default HomePage;
