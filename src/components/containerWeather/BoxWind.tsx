import { UseBoxWindType } from "../../hook/useBoxWind";

type BoxWindPropsType = {
  windValue: UseBoxWindType
}

function BoxWind({windValue}:BoxWindPropsType) {

  return (
    <div
      className={`${windValue.color} box__weather_df box__weather_flex`}
    >
      <p className="text-box__weather_head">Wind</p>
      <div>
        <p className="box__weather_result">
          {windValue.windSpeed.toFixed(1)}km/h
        </p>
        <p className="box__weather_sub_result">{windValue.status}</p>
      </div>
    </div>
  );
}

export default BoxWind;
