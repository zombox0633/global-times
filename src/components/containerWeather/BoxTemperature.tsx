type BoxTemperatureDataPropsType = {
  tempData: number;
  minTemp?: string;
  maxTemp?: string;
  tempColor: string;
};

type BoxTemperaturePropsType = {
  temperatureData: BoxTemperatureDataPropsType;
};

function BoxTemperature({ temperatureData: temperature }: BoxTemperaturePropsType) {
  const { tempData, minTemp, maxTemp, tempColor } = temperature;

  return (
    <div className={`${tempColor} box__weather_df box__weather_flex`}>
      <p className="box__weather_head">Temperature</p>
      <div>
        <p className="box__weather_result">{tempData.toFixed(1)}&deg;C</p>
        <p className="box__weather_sub_result">
          {minTemp}&deg;C - {maxTemp}&deg;C
        </p>
      </div>
    </div>
  );
}

export default BoxTemperature;
