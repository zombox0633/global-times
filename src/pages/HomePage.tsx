import DisplayPinsCity from "../components/homePage/DisplayPinsCity";
import DisplayRecommendedCities from "../components/homePage/DisplayRecommendedCities";
import HeaderSection from "../components/searchBar/HeaderSection";
import { usePinContext } from "../context/pin/PinContext";
import useGetInterestGroupData from "../hook/globalTimeService/useGetInterestGroupData";

function HomePage() {
  const { sortInterestData, loading, error } = useGetInterestGroupData({
    page: 1,
    size: 8,
  });
  const { pins } = usePinContext();
  const hasPin: boolean = pins.length > 0;
  const hasSortInterestData: boolean = sortInterestData.length > 0;

  return (
    <div className='mb-12 2xl:mb-20'>
      <HeaderSection />
      {hasPin && hasSortInterestData && <DisplayPinsCity pins={pins} />}
      <DisplayRecommendedCities
        sortInterestData={sortInterestData}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default HomePage;
