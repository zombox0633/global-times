import clsx from "clsx";
import { usePinContext } from "../context/pin/PinContext";

type TogglePinCountryButtonPropsType = {
  countryName: string;
};

function TogglePinCountryButton({ countryName }: TogglePinCountryButtonPropsType) {
  const { pins, togglePin } = usePinContext();
  const pinCountry = pins.some((pin) => pin.name.toLowerCase() === countryName.toLowerCase());

  return (
    <button
      type='button'
      aria-label={`Pin/Unpin ${countryName}`}
      onClick={() => togglePin(countryName)}
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
