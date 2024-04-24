import clsx from "clsx";
import { usePinContext } from "../context/pin/PinContext";

type TogglePinCountryButtonPropsType = {
  cityName: string;
};

function TogglePinCountryButton({ cityName }: TogglePinCountryButtonPropsType) {
  const { pins, togglePin } = usePinContext();
  const pinCountry = pins.some((pin) => pin.name.toLowerCase() === cityName.toLowerCase());

  return (
    <button
      type='button'
      aria-label={`Pin/Unpin ${cityName}`}
      onClick={() => togglePin(cityName)}
      className={clsx("material-symbols-outlined text-2xl", {
        " text-white hover:border-[#42CE4B]": !pinCountry,
        " text-[#42CE4B] hover:border-red-600": pinCountry,
      })}
    >
      location_on
    </button>
  );
}

export default TogglePinCountryButton;
