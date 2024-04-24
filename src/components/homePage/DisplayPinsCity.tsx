import { PinsType } from "../../context/pin/PinContext";

type DisplayPinsCityPropsType = {
  pins : PinsType
}

function DisplayPinsCity({pins}:DisplayPinsCityPropsType) {
  const pinCitiesMap = pins.map((item) => item.name)
  return (
    <div className="justify-center' flex flex-col items-center">
      <div className='w-[90dvw] sm:max-w-[45rem] lg:max-w-[76rem] 2xl:w-[80dvw] 2xl:max-w-[85rem]'>
        <div className=' mb-10  px-[25%] sm:px-8 md:px-16  xl:px-8 2xl:px-[2%]'>
          <h3>Pinned</h3>
          {pinCitiesMap} {/*  แก้ไข */}
        </div>
      </div>
    </div>
  );
}

export default DisplayPinsCity;
