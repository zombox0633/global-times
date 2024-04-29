import { useEffect, useState } from "react";
//import BoxCountryDateTime from "./BoxCountryDateTime";
import { usePinContext } from "../../context/pin/PinContext";
//import { timezoneData } from "../../constraint/TIMEZONE_DATA";

function TimeZoneGrid() {
  const { pins } = usePinContext();
  const hasPin: boolean = pins.length > 0;
  const [displayMode, setDisplayMode] = useState<string>("recommended");

  useEffect(() => {
    if (!hasPin && displayMode !== "recommended") {
      setDisplayMode("recommended");
    }
  }, [displayMode, hasPin]);

  // const displayData = useMemo(() => {
  //   //pins
  //   const pinCountriesMap = pins.map((item) => item.name);
  //   const filterPinCountry = timezoneData.filter((item) =>
  //     pinCountriesMap.includes(item.country.toLowerCase()),
  //   );

  //   //highlighted
  //   const filterHighlight = timezoneData.filter((item) => item.highlighted).slice(0, 8);
  //   const sortTimezoneData = filterHighlight.sort((a, b) => a.country.localeCompare(b.country));

  //   const data = displayMode === "recommended" ? sortTimezoneData : filterPinCountry;
  //   return data;
  // }, [displayMode, pins]);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div
        className='relative grid w-[90dvw] gap-y-5 sm:max-w-[45rem]
          sm:grid-cols-2 sm:gap-y-8 lg:max-w-[76rem] lg:grid-cols-3 xl:grid-cols-4 2xl:w-[80dvw] 2xl:max-w-[85rem]'
      >
        {hasPin && (
          <div className=' absolute -top-[3.5rem] left-1/2 flex w-[13rem] -translate-x-1/2 justify-between sm:left-16 sm:translate-x-0 lg:left-8'>
            <button
              type='button'
              aria-label='Switch to Recommended mode'
              onClick={() => setDisplayMode("recommended")}
              className='text-xl'
            >
              Recommended
            </button>
            <button
              type='button'
              aria-label='Switch to Pinned mode'
              onClick={() => setDisplayMode("pin")}
              className='text-xl'
            >
              Pinned
            </button>
          </div>
        )}
        {/* {displayData.map((item, index) => (
          <div key={index} className=' flex items-center justify-center'>
            <BoxCountryDateTime timezoneData={item} />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default TimeZoneGrid;
