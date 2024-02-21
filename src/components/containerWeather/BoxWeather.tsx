import { UseBoxWeatherType } from "../../hook/useBoxWeather";

type BoxWeatherPropsType = {
  weatherData: string;
  weatherValue: UseBoxWeatherType;
};

function BoxWeather({ weatherData, weatherValue }: BoxWeatherPropsType) {
  return (
    <div className='box__weather_df bg-black'>
      <div className=' flex h-36 w-28 flex-col justify-between p-4 lg:w-36 2xl:w-40 '>
        <p className='box__weather_head z-50'>Weather</p>
        <p className='z-50 text-end text-lg lg:text-2xl'>{weatherData}</p>
      </div>
      <div className={`absolute inset-0 h-full w-full ${weatherValue.color} z-10 opacity-80`} />
      <div className=' absolute right-1 top-1'>
        <span className='material-symbols-outlined text-8xl '>{weatherValue.icon}</span>
      </div>
    </div>
  );
}

export default BoxWeather;
