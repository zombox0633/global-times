import BoxDate from "./BoxDate";
import BoxLocation from "./BoxLocation";
import BoxTemperature from "./BoxTemperature";
import BoxTime from "./BoxTime";

function BoxCountryDateTime() {
  return (
    <div className=" relative w-80 h-56 rounded-3xl py-6 px-8 bg-night overflow-hidden shadow-xl">
      <a href="" className="box_date_time__link">
        <BoxTemperature/>
        <div className="relative flex flex-col justify-between h-full z-20">
          <BoxLocation/>
          <div>
            <BoxTime/>
            <BoxDate/>
          </div>
        </div>
      </a>
    </div>
  );
}

export default BoxCountryDateTime;
