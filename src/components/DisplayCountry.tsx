import { useDateTimeContext } from "../context/TimeStampProvider";

function DisplayCountry() {
  const { timezone } = useDateTimeContext();

  return (
    <div className="flex justify-end mr-2">
      <h3>{timezone?.country}</h3>
    </div>
  );
}

export default DisplayCountry;
