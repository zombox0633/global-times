import { memo } from "react";
import useGetWeatherService from "../../hook/useGetWeatherService";
import useTemperatureColor from "../../hook/useTemperatureColor";

type BoxTemperaturePropsType = {
  city: string;
};

function BoxTemperature({ city }: BoxTemperaturePropsType) {
  const { weatherData } = useGetWeatherService({ city });

  const tempData = weatherData?.main.temp ? weatherData?.main.temp : 0;
  const { tempColor } = useTemperatureColor({ tempData });

  return (
    <div>
      <div
        className={`box_date_time__bg absolute -top-12 -right-12 w-36 h-36 rounded-full ${tempColor} z-10`}
      />
      <div className=" absolute top-8 right-4 z-20">
        <p className=" text-xl">{tempData.toFixed(1)}°C</p>
      </div>
    </div>
  );
}

const MemoBoxTemperature = memo(BoxTemperature);

export default MemoBoxTemperature;
