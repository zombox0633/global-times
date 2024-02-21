import { memo } from "react";

type DisplayTemperaturePropsType = {
  tempData: number;
  tempColor: string;
};

function DisplayTemperature({ tempData, tempColor }: DisplayTemperaturePropsType) {
  return (
    <div>
      <div
        className={`box_date_time__bg absolute -right-12 -top-12 h-36 w-36 rounded-full ${tempColor} z-10`}
      />
      <div className=' absolute right-4 top-8 z-20'>
        <p className=' text-xl'>{tempData.toFixed(1)}&deg;C</p>
      </div>
    </div>
  );
}

const MemoDisplayTemperature = memo(DisplayTemperature);

export default MemoDisplayTemperature;

/* .toFixed(1) ใช้สำหรับการแปลงตัวเลขเป็นสตริง (string) โดยที่สามารถระบุจำนวนหลักทศนิยมที่ต้องการให้แสดงได้. เมธอดนี้จะปัดเศษตัวเลขในส่วนทศนิยมตามปกติและเพิ่มเลขศูนย์ให้ครบตามจำนวนทศนิยมที่ระบุ */
