import { PinsType } from "../../context/pin/PinContext";
import useGetCityByCityName from "../../hook/globalTimeService/useGetCityByCityName";
import BoxCountryDateTime from "./BoxCountryDateTime";

type DisplayPinsCityPropsType = {
  pins: PinsType;
};

function DisplayPinsCity({ pins }: DisplayPinsCityPropsType) {
  const pinCitiesMap = pins.map((item) => item.name).join(",");
  const { data } = useGetCityByCityName({ cityName: pinCitiesMap });

  return (
    <div className="justify-center' flex flex-col items-center">
      <div className='w-[100dvw] sm:max-w-[45rem] lg:max-w-[76rem] 2xl:w-[80dvw] 2xl:max-w-[85rem]'>
        <div className=' mb-10 px-[15%] sm:px-8 md:px-16  xl:px-8 2xl:px-[2%]'>
          <div className=' mb-8 flex flex-row items-end'>
            <h3>Pinned</h3>
            <div className='ml-2'>
              <span className=' text-xs sm:text-lg'>Currently pinned {pins.length} of 4</span>
            </div>
          </div>
          <div
            className='relative grid w-[90dvw] gap-y-5 sm:max-w-[45rem]
            sm:grid-cols-2 sm:gap-y-8 lg:max-w-[76rem] lg:grid-cols-3 
            xl:grid-cols-4 2xl:w-[80dvw] 2xl:max-w-[85rem]'
          >
            {data && data?.map((item) => <BoxCountryDateTime key={item.id} timezoneData={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayPinsCity;
