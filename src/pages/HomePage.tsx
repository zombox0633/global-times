// import DisplayPinsCity from "../components/homePage/DisplayPinsCity";
import DisplayRecommendedCities from "../components/homePage/DisplayRecommendedCities";
import HeaderSection from "../components/homePage/HeaderSection";
// import { usePinContext } from "../context/pin/PinContext";

function HomePage() {
  // const { pins } = usePinContext();
  // const hasPin: boolean = pins.length > 0;

  return (
    <div className='relative flex h-dvh min-h-dvh flex-col justify-between overflow-x-hidden p-8 sm:pb-8'>
      <HeaderSection />
      {/* {hasPin && <DisplayPinsCity pins={pins} />} */}
      <DisplayRecommendedCities />
      <div className='h-8 2xl:h-20' />
    </div>
  );
}

export default HomePage;
