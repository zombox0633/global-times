import { useDateTimeContext } from "../../context/dateTime/DateTimeContext";

function DisplayCountry() {
  const { timezone } = useDateTimeContext();

  return (
    <div className="flex justify-end">
      <h3>{timezone?.country}</h3>
    </div>
  );
}

export default DisplayCountry;
