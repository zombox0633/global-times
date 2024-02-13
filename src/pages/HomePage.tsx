import BoxCountryDateTime from "../components/box/BoxCountryDateTime";
import { timezoneData } from "../constraint/TIMEZONE_DATA";

function HomePage() {
  return (
    <div>
      <div className=" mt-2 mb-16">
        <h1 className=" text-8xl">Time Zone</h1>
      </div>
      <div className=" grid grid-cols-5 gap-y-10">
        {timezoneData.map((item, index) => (
          <BoxCountryDateTime key={index} timezoneData={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
