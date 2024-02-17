import { memo } from "react";
import useGetWeatherService from "../../hook/useGetWeatherService";
import useTemperatureColor from "../../hook/useTemperatureColor";

type DisplayTemperaturePropsType = {
  city: string;
};

function DisplayTemperature({ city }: DisplayTemperaturePropsType) {
  const { weatherData } = useGetWeatherService({ city });
  const tempData = weatherData?.main.temp ? weatherData?.main.temp : 0;
  const tempColor = useTemperatureColor({ tempData });

  return (
    <div>
      <div
        className={`box_date_time__bg absolute -top-12 -right-12 w-36 h-36 rounded-full ${tempColor} z-10`}
      />
      <div className=" absolute top-8 right-4 z-20">
        <p className=" text-xl">{tempData.toFixed(1)}&deg;C</p>
      </div>
    </div>
  );
}

const MemoDisplayTemperature = memo(DisplayTemperature);

export default MemoDisplayTemperature;

/* .toFixed(1) ใช้สำหรับการแปลงตัวเลขเป็นสตริง (string) โดยที่สามารถระบุจำนวนหลักทศนิยมที่ต้องการให้แสดงได้. เมธอดนี้จะปัดเศษตัวเลขในส่วนทศนิยมตามปกติและเพิ่มเลขศูนย์ให้ครบตามจำนวนทศนิยมที่ระบุ */