import { UseBoxHumidityType } from "../../hook/useBoxHumidity";

type BoxHumidityDataPropsType = {
  humidityData: number;
  humidityValue: UseBoxHumidityType;
};

type BoxHumidityPropsType = {
  humidity: BoxHumidityDataPropsType;
};

function BoxHumidity({ humidity }: BoxHumidityPropsType) {
  const { humidityData, humidityValue } = humidity;

  return (
    <div className={`${humidityValue.color} box__weather_df box__weather_flex`}>
      <p className='box__weather_head'>Humidity</p>
      <div>
        <p className='box__weather_result'>{humidityData.toFixed(0)}&#37;</p>
        <p className='box__weather_sub_result'>{humidityValue.status}</p>
      </div>
    </div>
  );
}

export default BoxHumidity;
