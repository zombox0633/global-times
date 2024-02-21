import { UseBoxPressure } from "../../hook/useBoxPressure";

type BoxPressureDataPropsType = {
  pressureData: number;
  pressureValue: UseBoxPressure;
};

type BoxPressurePropsType = {
  pressure: BoxPressureDataPropsType;
};

function BoxPressure({ pressure }: BoxPressurePropsType) {
  const { pressureData, pressureValue } = pressure;

  return (
    <div className={`${pressureValue.color} box__weather_df box__weather_flex`}>
      <p className='box__weather_head'>Pressure</p>
      <div>
        <p className='box__weather_result'>{pressureData.toFixed(0)}hPa</p>
        <p className='box__weather_sub_result'>{pressureValue.status}</p>
      </div>
    </div>
  );
}

export default BoxPressure;
